import React from 'react';
import { cx } from '../../utils/cx';
import type { SpinnerSize } from '../../types';
import './Spinner.css';

export interface SpinnerProps {
  size?: SpinnerSize;
  className?: string;
  'aria-label'?: string;
}

const sizeMap: Record<SpinnerSize, number> = {
  'Extra Small': 16,
  'Small': 24,
  'Medium': 32,
  'Large': 48,
};

export function Spinner({ size = 'Medium', className, 'aria-label': ariaLabel = 'Loading' }: SpinnerProps) {
  const px = sizeMap[size];
  return (
    <span className={cx('ds-spinner', className)} role="status" aria-label={ariaLabel}>
      <svg width={px} height={px} viewBox="0 0 24 24" fill="none" className="ds-spinner__svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" opacity="0.2" />
        <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}
