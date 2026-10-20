// Fallback ideas: rotates the static libraries so regenerate gives a fresh set.
import { categoryAmount } from '../budget.js';
import { EVENT_TYPES, STYLE_SEEDS } from '../constants.js';
import { formatINR, formatNumber } from '../format.js';
import { BUDGETS } from './planData.js';
import {
  CULTURE_ACTIVITIES,
  CULTURE_FOOD,
  GENERIC_ACTIVITIES,
  GENERIC_EXTRAS,
  GENERIC_FOOD,
  STYLE_EXTRAS,
  STYLE_THEMES,
  TYPE_ACTIVITIES,
  TYPE_EXTRAS,
  TYPE_THEMES,
} from './ideaData.js';

export const typeLabel = (type) =>
  EVENT_TYPES.find((t) => t.value === type)?.label.toLowerCase() ?? type;

function ideaContext(meta) {
  const decor = BUDGETS[meta.type].find(([id]) => id === 'cat-decor');
  return {
    typeLabel: typeLabel(meta.type),
    guests: formatNumber(meta.guests),
    city: meta.city,
    culture: meta.culture || 'family',
    budgetLabel: formatINR(meta.budget),
    perGuest: formatINR(Math.round(meta.budget / meta.guests)),
    decorBudget: formatINR(categoryAmount(meta.budget, decor ? decor[2] : 10)),
    prefsNote: meta.prefs ? ` and matches your note: “${meta.prefs.slice(0, 60)}”` : '',
    kidsAgeHint: '5–10',
  };
}

const toIdea =
  (ctx) =>
  ([title, description, why]) => ({ title, description, whyItFits: why(ctx) });

/** Rotate `list` by `offset`, skip avoided titles, take `count` (falls back to avoided ones). */
function pick(list, count, offset, avoid) {
  const n = list.length;
  const rotated = list.map((_, i) => list[(i + offset) % n]);
  const fresh = rotated.filter((item) => !avoid.has(item[0]));
  const used =
    fresh.length >= count ? fresh : [...fresh, ...rotated.filter((i) => avoid.has(i[0]))];
  return used.slice(0, count);
}

const isVegOnly = (meta) =>
  meta.culture === 'Jain' || /\b(veg|vegetarian|jain|satvik|sattvic)\b/i.test(meta.prefs);

/** Ideas in four sections; `styleSeed` rotates the mix so regenerate gives a fresh set. */
export function buildFallbackIdeas(meta, styleSeed = 'traditional', avoidTitles = []) {
  const ctx = ideaContext(meta);
  const seedIndex = Math.max(0, STYLE_SEEDS.indexOf(styleSeed));
  const avoid = new Set(avoidTitles);
  const vegOnly = isVegOnly(meta);

  const themes = [...STYLE_THEMES[STYLE_SEEDS[seedIndex]], ...(TYPE_THEMES[meta.type] ?? [])];
  for (const seed of STYLE_SEEDS)
    if (seed !== STYLE_SEEDS[seedIndex]) themes.push(...STYLE_THEMES[seed]);

  // Culture food always leads (e.g. Kerala → sadhya), then rotating generic options.
  const dietOk = ([, , , veg]) => !vegOnly || veg;
  const leadFood = (CULTURE_FOOD[meta.culture] ?? []).filter(dietOk).slice(0, 1);
  const food = [
    ...leadFood,
    ...pick(GENERIC_FOOD.filter(dietOk), 4 - leadFood.length, seedIndex, avoid),
  ];

  const activities = [
    ...(CULTURE_ACTIVITIES[meta.culture] ?? []),
    ...TYPE_ACTIVITIES[meta.type],
    ...GENERIC_ACTIVITIES,
  ];
  const extras = [
    ...STYLE_EXTRAS[STYLE_SEEDS[seedIndex]],
    ...(TYPE_EXTRAS[meta.type] ?? []),
    ...GENERIC_EXTRAS,
  ];

  const make = toIdea(ctx);
  return {
    theme: pick(themes, 4, 0, avoid).map(make),
    food: food.map(make),
    activities: pick(activities, 4, seedIndex % 2, avoid).map(make),
    extras: pick(extras, 3, 0, avoid).map(make),
  };
}
