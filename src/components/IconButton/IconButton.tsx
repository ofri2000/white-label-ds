import React, { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import type { Size } from '../../types';
import './IconButton.css';

export type IconButtonVariant = 'Primary' | 'Secondary' | 'Ghost';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: Size;
  icon: React.ReactNode;
  'aria-label': string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = 'Secondary', size = 'Medium', icon, disabled, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cx(
          'ds-icon-btn',
          `ds-icon-btn--${variant.toLowerCase()}`,
          `ds-icon-btn--${size.toLowerCase()}`,
          className,
        )}
        disabled={disabled}
        {...rest}
      >
        <span className="ds-icon-btn__icon">{icon}</span>
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';
