import React, { useState, useRef, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import type { TooltipPosition } from '../../types';
import './Tooltip.css';

export interface TooltipProps {
  content: ReactNode;
  position?: TooltipPosition;
  children: ReactNode;
  className?: string;
}

export function Tooltip({ content, position = 'Top', children, className }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const show = () => {
    clearTimeout(timeoutRef.current);
    setVisible(true);
  };
  const hide = () => {
    timeoutRef.current = setTimeout(() => setVisible(false), 100);
  };

  return (
    <div className={cx('ds-tooltip-wrapper', className)} onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      {visible && (
        <div className={cx('ds-tooltip', `ds-tooltip--${position.toLowerCase()}`)} role="tooltip">
          {content}
        </div>
      )}
    </div>
  );
}
