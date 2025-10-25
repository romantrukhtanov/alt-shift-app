import type { CSSProperties } from 'react';

export type GridItemCSSVars = CSSProperties &
  Partial<Record<'--grid-span-desktop' | '--grid-span-tablet' | '--grid-span-mobile', string | number>>;
