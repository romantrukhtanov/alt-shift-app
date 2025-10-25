import type { CSSProperties } from 'react';

export type GridCSSVars = CSSProperties &
  Partial<
    Record<
      | '--grid-cols-desktop'
      | '--grid-cols-tablet'
      | '--grid-cols-mobile'
      | '--grid-gap-desktop'
      | '--grid-gap-tablet'
      | '--grid-gap-mobile',
      string | number
    >
  >;
