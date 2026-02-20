import React from 'react';
import { cx } from '../../utils/cx';
import './Chip.css';

export interface ChipProps {
  children: React.ReactNode;
  disabled?: boolean;
  onRemove?: () => void;
  className?: string;
}

export function Chip({ children, disabled = false, onRemove, className }: ChipProps) {
  return (
    <span className={cx('ds-chip', disabled && 'ds-chip--disabled', className)}>
      <span className="ds-chip__label">{children}</span>
      {onRemove && !disabled && (
        <button type="button" className="ds-chip__remove" onClick={onRemove} aria-label="Remove" tabIndex={-1}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </span>
  );
}
