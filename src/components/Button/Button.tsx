import React, { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import type { ButtonVariant, Size } from '../../types';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant: Primary | Secondary | Ghost | Green | Red */
  variant?: ButtonVariant;
  /** Size: Medium (40px) | Small (32px) */
  size?: Size;
  /** Render an icon before the label */
  iconLeft?: React.ReactNode;
  /** Render an icon after the label */
  iconRight?: React.ReactNode;
  /** Loading spinner state */
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'Primary',
      size = 'Medium',
      disabled = false,
      loading = false,
      iconLeft,
      iconRight,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cx(
          'ds-btn',
          `ds-btn--${variant.toLowerCase()}`,
          `ds-btn--${size.toLowerCase()}`,
          loading && 'ds-btn--loading',
          className,
        )}
        disabled={disabled || loading}
        {...rest}
      >
        {loading && (
          <span className="ds-btn__spinner" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" opacity="0.3" />
              <path d="M14 8a6 6 0 0 0-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        )}
        {iconLeft && <span className="ds-btn__icon">{iconLeft}</span>}
        {children && <span className="ds-btn__label">{children}</span>}
        {iconRight && <span className="ds-btn__icon">{iconRight}</span>}
      </button>
    );
  },
);

Button.displayName = 'Button';
