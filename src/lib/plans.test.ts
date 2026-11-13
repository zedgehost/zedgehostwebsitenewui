import { describe, expect, it } from 'vitest';
import type { Plan } from '../content/types';
import { comparisonLabels, comparisonValue } from './plans';

function plan(overrides: Partial<Plan>): Plan {
  return {
    name: 'Plan',
    tagline: 'Tagline',
    price: 1200,
    billing: 'yearly',
    note: '',
    ctaHref: '#',
    specs: [],
    more: [],
    ...overrides,
  };
}

describe('comparison helpers', () => {
  const plans = [
    plan({
      name: 'VPS Basic',
      specs: [
        { value: '1 Core', label: 'CPU Cores' },
        { value: '2 GB', label: 'RAM' },
      ],
    }),
    plan({
      name: 'VPS Pro',
      specs: [
        { value: '2 Cores', label: 'CPU Cores' },
        { value: '160 GB', label: 'SSD Storage' },
      ],
    }),
  ];

  it('collects every spec label once in first-seen order', () => {
    expect(comparisonLabels(plans)).toEqual(['CPU Cores', 'RAM', 'SSD Storage']);
  });

  it('returns a dash for a spec the plan does not list', () => {
    expect(comparisonValue(plans[0], 'SSD Storage')).toBe('—');
    expect(comparisonValue(plans[1], 'CPU Cores')).toBe('2 Cores');
  });
});
