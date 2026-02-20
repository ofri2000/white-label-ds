import React, { forwardRef, type InputHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import './RadioButton.css';

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: boolean;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, error = false, disabled = false, className, ...rest }, ref) => {
    return (
      <label className={cx('ds-radio', disabled && 'ds-radio--disabled', error && 'ds-radio--error', className)}>
        <input ref={ref} type="radio" className="ds-radio__native" disabled={disabled} {...rest} />
        <span className="ds-radio__circle" />
        {label && <span className="ds-radio__label">{label}</span>}
      </label>
    );
  },
);

RadioButton.displayName = 'RadioButton';
