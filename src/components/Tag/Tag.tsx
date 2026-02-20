import React from 'react';
import { cx } from '../../utils/cx';
import './Tag.css';

export interface TagProps {
  children: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Tag({ children, selected = false, disabled = false, onClick, className }: TagProps) {
  return (
    <button
      type="button"
      className={cx('ds-tag', selected && 'ds-tag--selected', disabled && 'ds-tag--disabled', className)}
      disabled={disabled}
      onClick={onClick}
      role="option"
      aria-selected={selected}
    >
      {children}
    </button>
  );
}
