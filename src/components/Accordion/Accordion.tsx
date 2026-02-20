import React, { useState, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import './Accordion.css';

export interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenIds?: string[];
  className?: string;
}

export function Accordion({ items, defaultOpenIds = [], className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(defaultOpenIds));

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className={cx('ds-accordion', className)}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div key={item.id} className={cx('ds-accordion__item', isOpen && 'ds-accordion__item--open', item.disabled && 'ds-accordion__item--disabled')}>
            <button
              type="button"
              className="ds-accordion__trigger"
              onClick={() => !item.disabled && toggle(item.id)}
              aria-expanded={isOpen}
              disabled={item.disabled}
            >
              <span className="ds-accordion__title">{item.title}</span>
              <span className="ds-accordion__chevron" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </button>
            {isOpen && <div className="ds-accordion__panel">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
