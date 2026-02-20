import type { ReactNode } from 'react';

export type Size = 'Small' | 'Medium';

export type ButtonVariant = 'Primary' | 'Secondary' | 'Ghost' | 'Green' | 'Red';

export type InputState = 'Rest' | 'Hovered' | 'Focused';

export type Intent = 'default' | 'error' | 'warning' | 'success';

export type BadgeColor = 'Blue' | 'Black' | 'Outline' | 'White' | 'Gold';

export type TooltipPosition = 'Top' | 'Bottom' | 'Left' | 'Right';

export type SpinnerSize = 'Extra Small' | 'Small' | 'Medium' | 'Large';

export type SkeletonSize = 'XS' | 'S' | 'M';

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  'data-testid'?: string;
}
