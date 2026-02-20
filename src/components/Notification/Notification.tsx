import React from 'react';
import { cx } from '../../utils/cx';
import './Notification.css';

export type NotificationType = 'Info' | 'Warning' | 'Alert' | 'Success';

export interface NotificationProps {
  type?: NotificationType;
  title?: string;
  children: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
}

const borderColorMap: Record<NotificationType, string> = {
  Info: 'var(--fill-accent-default)',
  Warning: 'var(--color-warning)',
  Alert: 'var(--color-error)',
  Success: 'var(--color-success)',
};

export function Notification({ type = 'Info', title, children, onDismiss, className }: NotificationProps) {
  return (
    <div className={cx('ds-notification', `ds-notification--${type.toLowerCase()}`, className)} role="alert" style={{ borderLeftColor: borderColorMap[type] }}>
      <div className="ds-notification__body">
        {title && <p className="ds-notification__title">{title}</p>}
        <div className="ds-notification__content">{children}</div>
      </div>
      {onDismiss && (
        <button type="button" className="ds-notification__close" onClick={onDismiss} aria-label="Dismiss">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      )}
    </div>
  );
}
