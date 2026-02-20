import React from 'react';
import { cx } from '../../utils/cx';
import type { SkeletonSize } from '../../types';
import './Skeleton.css';

export interface SkeletonProps {
  size?: SkeletonSize;
  width?: string | number;
  className?: string;
}

const heightMap: Record<SkeletonSize, string> = {
  'XS': 'var(--size-3xs)',
  'S': 'var(--size-xs)',
  'M': 'var(--size-m)',
};

export function Skeleton({ size = 'M', width = '100%', className }: SkeletonProps) {
  return (
    <div
      className={cx('ds-skeleton', className)}
      style={{ width: typeof width === 'number' ? `${width}px` : width, height: heightMap[size] }}
      aria-hidden="true"
    />
  );
}
