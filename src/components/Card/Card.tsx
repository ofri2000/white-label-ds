import React, { type HTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import './Card.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

export function Card({ disabled = false, children, className, ...rest }: CardProps) {
  return (
    <div className={cx('ds-card', disabled && 'ds-card--disabled', className)} aria-disabled={disabled || undefined} {...rest}>
      {children}
    </div>
  );
}
