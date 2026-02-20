import React, { forwardRef, type SelectHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import './Dropdown.css';

export interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  errorText?: string;
  description?: string;
  placeholder?: string;
}

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ error = false, errorText, description, disabled = false, children, className, ...rest }, ref) => {
    return (
      <div className={cx('ds-dropdown', error && 'ds-dropdown--error', disabled && 'ds-dropdown--disabled', className)}>
        <div className="ds-dropdown__field">
          <select ref={ref} className="ds-dropdown__native" disabled={disabled} aria-invalid={error || undefined} {...rest}>
            {children}
          </select>
          <span className="ds-dropdown__chevron" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        {error && errorText && <p className="ds-dropdown__error-text">{errorText}</p>}
        {!error && description && <p className="ds-dropdown__description">{description}</p>}
      </div>
    );
  },
);

Dropdown.displayName = 'Dropdown';
