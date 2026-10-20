// Deterministic, rule-based planner (PROMPT_SPEC §7). Pure: same input → same plan.
// It must satisfy the same PlanSchema as the AI, so the demo never breaks.
export { buildFallbackIdeas } from './fallback/ideas.js';
export { buildFallbackPlan } from './fallback/plan.js';
