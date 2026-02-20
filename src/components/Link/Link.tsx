import React, { type AnchorHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import './Link.css';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
}

export function Link({ disabled = false, children, className, ...rest }: LinkProps) {
  return (
    <a
      className={cx('ds-link', disabled && 'ds-link--disabled', className)}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}
