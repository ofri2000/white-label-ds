import React, { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import './TextArea.css';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  errorText?: string;
  description?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error = false, errorText, description, disabled = false, className, ...rest }, ref) => {
    return (
      <div className={cx('ds-textarea', error && 'ds-textarea--error', disabled && 'ds-textarea--disabled', className)}>
        <textarea
          ref={ref}
          className="ds-textarea__native"
          disabled={disabled}
          aria-invalid={error || undefined}
          {...rest}
        />
        {error && errorText && <p className="ds-textarea__error-text">{errorText}</p>}
        {!error && description && <p className="ds-textarea__description">{description}</p>}
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
