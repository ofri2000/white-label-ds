import React, { forwardRef, type InputHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import './TextInput.css';

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Show error styling and message */
  error?: boolean;
  /** Error message text */
  errorText?: string;
  /** Description / helper text */
  description?: string;
  /** Unit suffix (e.g. "%", "px") */
  unit?: string;
  /** Show revert/clear button */
  showRevert?: boolean;
  /** Callback for revert button */
  onRevert?: () => void;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      error = false,
      errorText,
      description,
      unit,
      disabled = false,
      showRevert,
      onRevert,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <div
        className={cx(
          'ds-text-input',
          error && 'ds-text-input--error',
          disabled && 'ds-text-input--disabled',
          className,
        )}
      >
        <div className="ds-text-input__field">
          <input
            ref={ref}
            className="ds-text-input__native"
            disabled={disabled}
            aria-invalid={error || undefined}
            {...rest}
          />
          {unit && <span className="ds-text-input__unit">{unit}</span>}
          {showRevert && !disabled && (
            <button
              type="button"
              className="ds-text-input__revert"
              onClick={onRevert}
              aria-label="Revert"
              tabIndex={-1}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9.5 9.5l5 5M14.5 9.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
        {error && errorText && <p className="ds-text-input__error-text">{errorText}</p>}
        {!error && description && <p className="ds-text-input__description">{description}</p>}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
