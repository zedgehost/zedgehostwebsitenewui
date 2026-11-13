import type { ReactNode } from 'react';

type Tone = 'blue' | 'solid' | 'purple' | 'deep' | 'light';

export function Badge({
  children,
  tone = 'blue',
  className = '',
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return <span className={`zh-badge zh-badge--${tone} ${className}`.trim()}>{children}</span>;
}
