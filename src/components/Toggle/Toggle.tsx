import React, { forwardRef, type InputHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import './Toggle.css';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  /** Place label on the left or right side */
  textSide?: 'Left' | 'Right';
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, textSide = 'Left', disabled = false, className, ...rest }, ref) => {
    return (
      <label className={cx('ds-toggle', disabled && 'ds-toggle--disabled', textSide === 'Right' && 'ds-toggle--right', className)}>
        {textSide === 'Left' && label && <span className="ds-toggle__label">{label}</span>}
        <input ref={ref} type="checkbox" className="ds-toggle__native" disabled={disabled} role="switch" {...rest} />
        <span className="ds-toggle__track">
          <span className="ds-toggle__thumb" />
        </span>
        {textSide === 'Right' && label && <span className="ds-toggle__label">{label}</span>}
      </label>
    );
  },
);

Toggle.displayName = 'Toggle';
