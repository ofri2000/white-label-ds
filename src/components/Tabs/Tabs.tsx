import React, { useState } from 'react';
import { cx } from '../../utils/cx';
import './Tabs.css';

export interface TabItem {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  activeId?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export function Tabs({ items, activeId, onChange, className }: TabsProps) {
  const [internalActive, setInternalActive] = useState(activeId || items[0]?.id);
  const current = activeId ?? internalActive;

  const handleClick = (id: string) => {
    setInternalActive(id);
    onChange?.(id);
  };

  return (
    <div className={cx('ds-tabs', className)} role="tablist">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          role="tab"
          className={cx('ds-tabs__tab', current === item.id && 'ds-tabs__tab--active', item.disabled && 'ds-tabs__tab--disabled')}
          aria-selected={current === item.id}
          disabled={item.disabled}
          onClick={() => handleClick(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
