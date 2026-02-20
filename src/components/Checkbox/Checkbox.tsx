import React, { forwardRef, type InputHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import './Checkbox.css';

export type CheckboxSelection = 'checked' | 'unchecked' | 'partial';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text */
  label?: string;
  /** Visual selection state for controlled usage */
  selection?: CheckboxSelection;
  /** Error border styling */
  error?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, selection, error = false, disabled = false, className, checked, ...rest }, ref) => {
    const isChecked = selection === 'checked' || checked;
    const isPartial = selection === 'partial';

    return (
      <label className={cx('ds-checkbox', disabled && 'ds-checkbox--disabled', error && 'ds-checkbox--error', className)}>
        <input
          ref={ref}
          type="checkbox"
          className="ds-checkbox__native"
          disabled={disabled}
          checked={isChecked || false}
          {...rest}
        />
        <span className={cx('ds-checkbox__box', isChecked && 'ds-checkbox__box--checked', isPartial && 'ds-checkbox__box--partial')}>
          {isChecked && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {isPartial && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </span>
        {label && <span className="ds-checkbox__label">{label}</span>}
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
