/**
 * Design Tokens
 * Centralized design variables extracted from Figma design file
 */

// Color Primitives
export const colorPrimitives = {
  // Neutrals
  'Neutrals/N-1': '#f8f8f9',
  'Neutrals/N-2': '#f1f1f2',
  'Neutrals/N-3': '#e5e5e6',
  'Neutrals/N-4': '#9d9d9e',
  'Neutrals/N-5': '#6e6e71',
  'Neutrals/N-6': '#575758',
  'Neutrals/N-7': '#434344',
  'Neutrals/N-8': '#242425',
  'Neutrals/N-9': '#1b1b1c',
  'Neutrals/White': '#ffffff',
  'Neutrals/Pitch Black': '#101011',
  
  // Gold
  'Gold/Gold': '#a08c64',
  'Gold/G-3': '#73644b',
  'Gold/G-2': '#beaf93',
  'Gold/G-1': '#ebe6dc',
  
  // Electric Blue
  'Electric Blue/Blue': '#1467f5',
  'Electric Blue/B-3': '#002e7d',
  'Electric Blue/B-2': '#669eff',
  'Electric Blue/B-1': '#e0ecff',
  
  // Error
  'Error/Error': '#e83030',
  'Error/E-1': '#fff5f5',
  'Error/E-2': '#f76e6e',
  'Error/E-3': '#800000',
  
  // Warning
  'Warning/Warning': '#f2cc0d',
  'Warning/W-1': '#fffcf0',
  'Warning/W-2': '#f6d94d',
  'Warning/W-3': '#917a08',
  
  // Success
  'Success/Success': '#62ac53',
  'Success/S-1': '#c4f7ba',
  'Success/S-2': '#77cc66',
  'Success/S-3': '#3e6935',
  
  // Skeleton
  'Skeleton/SK-1-Light': 'rgba(157, 157, 157, 0.3)',
  'Skeleton/SK-2-Light': 'rgba(157, 157, 157, 0.5)',
  'Skeleton/SK-1-Dark': 'rgba(87, 87, 87, 0.3)',
  'Skeleton/SK-2-Dark': 'rgba(87, 87, 87, 0.5)',
} as const;

// Semantic Colors
export const colors = {
  // Fill
  'Fill/fill-accent-default': colorPrimitives['Electric Blue/Blue'],
  'Fill/fill-accent-latched': colorPrimitives['Electric Blue/B-3'],
  'Fill/fill-accent-hovered': colorPrimitives['Electric Blue/B-3'],
  'Fill/fill-button-default': colorPrimitives['Neutrals/N-2'],
  'Fill/fill-button-latched': colorPrimitives['Neutrals/Pitch Black'],
  'Fill/fill-button-hovered': colorPrimitives['Neutrals/N-3'],
  'Fill/fill-button-disabled': colorPrimitives['Neutrals/N-3'],
  'Fill/fill-accent-disabled': colorPrimitives['Neutrals/N-3'],
  'Fill/fill-input-default': colorPrimitives['Neutrals/N-2'],
  'Fill/fill-input-hovered': colorPrimitives['Neutrals/N-3'],
  'Fill/fill-input-pressed': colorPrimitives['Neutrals/White'],
  'Fill/fill-input-disabled': colorPrimitives['Neutrals/White'],
  'Fill/fill-input-focused': colorPrimitives['Neutrals/White'],
  'Fill/fill-input-error': colorPrimitives['Neutrals/White'],
  'Fill/fill-input-warning': colorPrimitives['Warning/W-1'],
  'Fill/fill-error': colorPrimitives['Neutrals/White'],
  'Fill/fill-menu-hovered': colorPrimitives['Neutrals/N-1'],
  'Fill/fill-menu-selected': colorPrimitives['Neutrals/N-1'],
  'Fill/fill-inverted': colorPrimitives['Neutrals/Pitch Black'],
  'Fill/fill-hovered': colorPrimitives['Neutrals/N-2'],
  'Fill/fill-disabled': colorPrimitives['Neutrals/N-1'],
  'Fill/fill-selected': colorPrimitives['Neutrals/N-1'],
  'Fill/fill-dimming': 'rgba(0, 0, 0, 0.4)',
  'Fill/fill-button-error-default': colorPrimitives['Error/Error'],
  'Fill/fill-button-error-hovered': colorPrimitives['Error/E-2'],
  'Fill/fill-button-error-latched': colorPrimitives['Error/E-3'],
  'Fill/fill-button-success-default': colorPrimitives['Success/Success'],
  'Fill/fill-button-success-hovered': colorPrimitives['Success/S-2'],
  'Fill/fill-button-success-latched': colorPrimitives['Success/S-3'],
  'Fill/fill-tooltip': colorPrimitives['Neutrals/Pitch Black'],
  'Fill/fill-off-default': colorPrimitives['Neutrals/N-4'],
  'Fill/fill-off-hovered': colorPrimitives['Neutrals/N-5'],
  'Fill/fill-on-default': colorPrimitives['Neutrals/Pitch Black'],
  'Fill/fill-on-hovered': colorPrimitives['Neutrals/N-6'],
  
  // Border
  'Border/border-input-default': colorPrimitives['Neutrals/N-3'],
  'Border/border-input-hovered': colorPrimitives['Neutrals/N-3'],
  'Border/border-input-disabled': colorPrimitives['Neutrals/N-3'],
  'Border/border-input-error': colorPrimitives['Error/Error'],
  'Border/border-button-default': colorPrimitives['Neutrals/N-2'],
  'Border/border-button-hovered': colorPrimitives['Neutrals/N-3'],
  'Border/border-button-latched': colorPrimitives['Neutrals/N-6'],
  'Border/border-button-disabled': colorPrimitives['Neutrals/N-3'],
  'Border/border-focused': colorPrimitives['Electric Blue/Blue'],
  'Border/border-default': colorPrimitives['Neutrals/N-3'],
  'Border/border-inverted': colorPrimitives['Neutrals/White'],
  'Border/border-white': colorPrimitives['Neutrals/White'],
  'Border/border-black': colorPrimitives['Neutrals/Pitch Black'],
  
  // Content
  'Content/content-primary-default': colorPrimitives['Neutrals/Pitch Black'],
  'Content/content-inverted': colorPrimitives['Neutrals/White'],
  'Content/content-disabled': colorPrimitives['Neutrals/N-4'],
  'Content/content-error': colorPrimitives['Error/Error'],
  'Content/content-accent-cta': colorPrimitives['Electric Blue/Blue'],
  'Content/content-modified': colorPrimitives['Neutrals/Pitch Black'],
  'Content/content-secondary-default': colorPrimitives['Neutrals/N-5'],
  'Content/content-accent': colorPrimitives['Electric Blue/Blue'],
  'Content/content-accent-hovered': colorPrimitives['Electric Blue/B-3'],
  'Content/content-warning': colorPrimitives['Warning/Warning'],
  'Content/content-success': colorPrimitives['Success/Success'],
  'Content/content-black': colorPrimitives['Neutrals/Pitch Black'],
  'Content/content-white': colorPrimitives['Neutrals/White'],
  
  // Background
  'Background/background-primary': colorPrimitives['Neutrals/White'],
  'Background/background-secondary': colorPrimitives['Neutrals/N-1'],
  'Background/background-tertiary': colorPrimitives['Neutrals/N-2'],
  'Background/background-overlay': colorPrimitives['Neutrals/White'],
  'Background/background-inverted': colorPrimitives['Neutrals/Pitch Black'],
  'Background/background-modal': colorPrimitives['Neutrals/White'],
  
  // Documentation
  'Documentation/background-primary': colorPrimitives['Neutrals/White'],
  'Documentation/background-secondary': colorPrimitives['Neutrals/N-1'],
  'Documentation/border-primary': colorPrimitives['Neutrals/Pitch Black'],
  'Documentation/border-secondary': colorPrimitives['Neutrals/N-3'],
  
  // Skeleton
  'Skeleton/skeleton-a': colorPrimitives['Skeleton/SK-1-Light'],
  'Skeleton/skeleton-b': colorPrimitives['Skeleton/SK-2-Light'],
} as const;

// Corner Radius tokens
export const cornerRadius = {
  'corner-radius/s': '4px',
  'corner-radius/m': '6px',
  'corner-radius/l': '10px',
  'corner-radius/xl': '22px',
  'corner-radius/full': '1000px',
} as const;

// Sizing tokens
export const sizing = {
  // Focus Outline
  'focus-outline/input': '2px',
  'focus-outline/button': '4px',
  
  // Width Limits
  'width-limit/tooltip-max': '200px',
  'width-limit/app-launcher-max': '448px',
  'width-limit/toast-max': '480px',
  'width-limit/toast-min': '240px',
  
  // Platform Size
  'size/3xs': '16px',
  'size/2xs': '20px',
  'size/xs': '24px',
  'size/s': '32px',
  'size/m': '40px',
  'size/l': '48px',
  'size/xl': '64px',
  'size/2xl': '80px',
  
  // Tree Indentation
  'tree-indentation/level-0': '8px',
  'tree-indentation/level-1': '24px',
  'tree-indentation/level-2': '40px',
  'tree-indentation/level-3': '56px',
  
  // Icon Size
  'icon-size/2xs': '12px',
  'icon-size/xs': '16px',
  'icon-size/s': '20px',
  'icon-size/m': '24px',
  'icon-size/l': '32px',
  'icon-size/xl': '48px',
} as const;

// Spacing tokens
export const spacing = {
  'spacing/none': '0px',
  'spacing/3xs': '4px',
  'spacing/2xs': '8px',
  'spacing/xs': '12px',
  'spacing/s': '16px',
  'spacing/m': '20px',
  'spacing/l': '24px',
  'spacing/xl': '32px',
  'spacing/2xl': '48px',
  'spacing/3xl': '72px',
  'spacing/4xl': '96px',
  'spacing/5xl': '128px',
} as const;

// Typography tokens
export const typography = {
  // Typeface
  'typeface/heading': 'Inter',
  'typeface/text': 'Inter',
  
  // Font Size
  'font-size/heading-4xl': '104px',
  'font-size/heading-3xl': '80px',
  'font-size/heading-2xl': '56px',
  'font-size/heading-xl': '40px',
  'font-size/heading-l': '24px',
  'font-size/heading-m': '18px',
  'font-size/heading-s': '16px',
  'font-size/body-l': '18px',
  'font-size/body-m': '16px',
  'font-size/body-s': '14px',
  'font-size/body-xs': '12px',
  'font-size/body-2xs': '10px',
  'font-size/label-l': '18px',
  'font-size/label-m': '14px',
  'font-size/label-s': '12px',
  'font-size/label-xs': '10px',
  
  // Line Height
  'line-height/heading-4xl': '104px',
  'line-height/heading-3xl': '80px',
  'line-height/heading-2xl': '60px',
  'line-height/heading-xl': '44px',
  'line-height/heading-l': '30px',
  'line-height/heading-m': '22px',
  'line-height/heading-s': '20px',
  'line-height/body-l': '24px',
  'line-height/body-m': '20px',
  'line-height/body-s': '18px',
  'line-height/body-xs': '16px',
  'line-height/body-2xs': '14px',
  'line-height/label-l': '22px',
  'line-height/label-m': '16px',
  'line-height/label-s': '14px',
  'line-height/label-xs': '12px',
  
  // Font Weight
  'font-weight/regular': '400',
  'font-weight/medium': '500',
  'font-weight/bold': '700',
} as const;

// Shadow tokens
export const shadows = {
  'shadow/level-1': '0px 1px 2px rgba(0, 0, 0, 0.06)',
  'shadow/level-2': '0px 2px 4px rgba(0, 0, 0, 0.08)',
  'shadow/level-3': '0px 4px 8px rgba(0, 0, 0, 0.12)',
  'shadow/level-4': '0px 8px 16px rgba(0, 0, 0, 0.16)',
  'shadow/level-5': '0px 16px 32px rgba(0, 0, 0, 0.20)',
} as const;