import React from 'react';
import { cx } from '../../utils/cx';
import './Breadcrumbs.css';

export interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav className={cx('ds-breadcrumbs', className)} aria-label="Breadcrumb">
      <ol className="ds-breadcrumbs__list">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.id} className="ds-breadcrumbs__item">
              {isLast ? (
                <span className="ds-breadcrumbs__current" aria-current="page">{item.label}</span>
              ) : (
                <>
                  <a className="ds-breadcrumbs__link" href={item.href} onClick={item.onClick}>{item.label}</a>
                  <span className="ds-breadcrumbs__separator" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
