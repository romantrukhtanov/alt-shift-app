import cn from 'clsx';
import type { PropsWithChildren } from 'react';
import React from 'react';

import styles from './Grid.module.css';
import type { GridCSSVars } from './types';

export type GridProps = PropsWithChildren<{
  className?: string;
  style?: GridCSSVars;
}>;

export function Grid({ className, style, children, ...rest }: GridProps) {
  return (
    <div className={cn(styles.root, className)} style={style} {...rest}>
      {children}
    </div>
  );
}
