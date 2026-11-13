import type { Plan } from '../content/types';

/** Union of spec labels across plans, in first-seen order, for comparison tables. */
export function comparisonLabels(plans: Plan[]): string[] {
  const labels: string[] = [];
  for (const plan of plans) {
    for (const spec of plan.specs) {
      if (!labels.includes(spec.label)) labels.push(spec.label);
    }
  }
  return labels;
}

/** A plan's value for a given comparison row, or a dash when it does not list it. */
export function comparisonValue(plan: Plan, label: string): string {
  return plan.specs.find((spec) => spec.label === label)?.value ?? '—';
}
