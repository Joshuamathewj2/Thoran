// Fallback plan: deterministic budget, tasks, vendors and warnings from the static templates.
import { categoryAmount } from '../budget.js';
import { formatINR, formatNumber } from '../format.js';
import { slugify, uniqueId } from '../ids.js';
import { daysLeftUntil } from '../postprocess.js';
import { buildFallbackIdeas, typeLabel } from './ideas.js';
import {
  BUDGETS,
  CULTURE_COMMUNITY_TASKS,
  CULTURE_VENDOR_TWEAKS,
  CULTURE_WEDDING_TASKS,
  NORTH_WEDDING,
  PER_GUEST_MIN,
  TASKS,
  VENDORS,
} from './planData.js';

function buildTasks(meta, daysLeft) {
  const library = [...TASKS[meta.type]];
  if (meta.type === 'wedding') library.push(...(CULTURE_WEDDING_TASKS[meta.culture] ?? []));
  if (meta.type === 'community') library.push(...(CULTURE_COMMUNITY_TASKS[meta.culture] ?? []));

  // Compress the schedule proportionally when the event is closer than the library assumes.
  const maxDays = Math.max(...library.map(([, d]) => d));
  const scale = maxDays > daysLeft ? daysLeft / maxDays : 1;
  const taken = new Set();

  return library
    .map(([title, d, category, priority]) => ({
      title,
      dueDaysBefore: Math.floor(d * scale),
      category,
      priority,
    }))
    .sort((a, b) => b.dueDaysBefore - a.dueDaysBefore)
    .slice(0, 25)
    .map((task) => {
      const id = uniqueId(`task-${slugify(task.title)}`, taken);
      taken.add(id);
      return { id, ...task };
    });
}

function buildVendors(meta, categories) {
  const tweaks = CULTURE_VENDOR_TWEAKS[meta.culture] ?? {};
  const list = [...VENDORS[meta.type]];
  if (meta.type === 'wedding' && NORTH_WEDDING.has(meta.culture)) {
    list.push([
      'cat-attire',
      'Mehendi artist',
      0.1,
      'Ask for per-hand rates for guests',
      'nice-to-have',
    ]);
  }
  const taken = new Set();
  return list.map(([categoryId, type, share, notes, priority]) => {
    const category = categories.find((c) => c.id === categoryId);
    const label = tweaks[type] ?? type;
    const id = uniqueId(`ven-${slugify(type)}`, taken);
    taken.add(id);
    return {
      id,
      category: category.name,
      type: label,
      estCost: Math.round(categoryAmount(meta.budget, category.percent) * share),
      notes,
      priority,
    };
  });
}

function buildWarnings(meta, daysLeft, categories) {
  const warnings = [];
  const perGuest = Math.round(meta.budget / meta.guests);
  if (perGuest < PER_GUEST_MIN[meta.type]) {
    const catering = categories.find((c) => c.id === 'cat-catering');
    const perPlate = catering
      ? Math.round(categoryAmount(meta.budget, catering.percent) / meta.guests)
      : perGuest;
    warnings.push(
      `${formatINR(meta.budget)} for ${formatNumber(meta.guests)} guests is very tight — about ${formatINR(perGuest)} per guest (~${formatINR(perPlate)}/plate). Consider a shorter guest list or a simpler menu.`,
    );
  }
  if (meta.type === 'wedding' && daysLeft < 30) {
    warnings.push(
      `Only ${daysLeft} days left for a wedding — book the venue and caterer today; popular dates fill fast.`,
    );
  } else if (daysLeft < 7) {
    warnings.push(`Only ${daysLeft} days left — focus on the high-priority tasks first.`);
  }
  return warnings;
}

/**
 * Build a complete plan without AI. Must pass PlanSchema for every valid intake.
 * @param {object} meta  validated intake (type, date, budget, guests, city, culture, prefs)
 * @param {string} today "YYYY-MM-DD" in IST
 */
export function buildFallbackPlan(meta, today) {
  const daysLeft = daysLeftUntil(meta.date, today);
  const categories = BUDGETS[meta.type].map(([id, name, percent, notes]) => ({
    id,
    name,
    percent,
    notes,
  }));
  const label = typeLabel(meta.type);

  return {
    summary: `A ${meta.culture ? `${meta.culture} ` : ''}${label} plan for ${formatNumber(meta.guests)} guests in ${meta.city} on a ${formatINR(meta.budget)} budget, ${daysLeft} days out. Catering and venue take the biggest share — start with the high-priority bookings.`,
    budget: { categories },
    tasks: buildTasks(meta, daysLeft),
    vendors: buildVendors(meta, categories),
    ideas: buildFallbackIdeas(meta, 'traditional'),
    warnings: buildWarnings(meta, daysLeft, categories),
  };
}
