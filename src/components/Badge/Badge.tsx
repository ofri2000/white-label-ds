import React from 'react';
import { cx } from '../../utils/cx';
import type { BadgeColor } from '../../types';
import './Badge.css';

export interface BadgeProps {
  /** Text content (usually a number) */
  children: React.ReactNode;
  /** Color variant matching Figma */
  color?: BadgeColor;
  className?: string;
}

export function Badge({ children, color = 'Blue', className }: BadgeProps) {
  return (
    <span className={cx('ds-badge', `ds-badge--${color.toLowerCase()}`, className)}>
      {children}
    </span>
  );
}
