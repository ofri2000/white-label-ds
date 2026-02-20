import React from 'react';
import { cx } from '../../utils/cx';
import './Toast.css';

export type ToastType = 'Info' | 'Success' | 'Error' | 'Warning' | 'Spinner' | 'Progress';

export interface ToastProps {
  type?: ToastType;
  children: React.ReactNode;
  action?: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
}

export function Toast({ type = 'Info', children, action, onDismiss, className }: ToastProps) {
  return (
    <div className={cx('ds-toast', `ds-toast--${type.toLowerCase()}`, className)} role="alert">
      <span className="ds-toast__icon" aria-hidden="true">
        {type === 'Success' && <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
        {type === 'Error' && <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M10 7v3M10 13h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>}
        {type === 'Warning' && <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3l7.66 13H2.34L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 9v2M10 13h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>}
        {type === 'Info' && <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M10 9v4M10 7h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>}
      </span>
      <span className="ds-toast__content">{children}</span>
      {action && <span className="ds-toast__action">{action}</span>}
      {onDismiss && (
        <button type="button" className="ds-toast__close" onClick={onDismiss} aria-label="Dismiss">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      )}
    </div>
  );
}
