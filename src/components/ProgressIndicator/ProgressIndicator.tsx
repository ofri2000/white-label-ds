import React from 'react';
import { cx } from '../../utils/cx';
import './ProgressIndicator.css';

export type ProgressType = 'Bar' | 'Circle';

export interface ProgressIndicatorProps {
  type?: ProgressType;
  value?: number; /* 0–100 */
  className?: string;
}

export function ProgressIndicator({ type = 'Bar', value = 0, className }: ProgressIndicatorProps) {
  const clamped = Math.max(0, Math.min(100, value));

  if (type === 'Circle') {
    const r = 10;
    const c = 2 * Math.PI * r;
    const offset = c - (clamped / 100) * c;
    return (
      <div className={cx('ds-progress ds-progress--circle', className)} role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100}>
        <svg width="32" height="32" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r={r} fill="none" stroke="var(--color-neutral-3)" strokeWidth="3" />
          <circle cx="16" cy="16" r={r} fill="none" stroke="var(--fill-accent-default)" strokeWidth="3" strokeLinecap="round"
            strokeDasharray={c} strokeDashoffset={offset} transform="rotate(-90 16 16)" />
        </svg>
        <span className="ds-progress__value">{clamped}%</span>
      </div>
    );
  }

  return (
    <div className={cx('ds-progress ds-progress--bar', className)} role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100}>
      <div className="ds-progress__track">
        <div className="ds-progress__fill" style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
}
