import cn from 'clsx';
import type { PropsWithChildren } from 'react';
import React from 'react';

import styles from './Griditem.module.css';
import type { GridItemCSSVars } from './types';

type GridItemProps = PropsWithChildren<{
  className?: string;
  style?: GridItemCSSVars;
}>;

export function GridItem({ className, style, children, ...rest }: GridItemProps) {
  return (
    <div className={cn(styles.root, className)} style={style} {...rest}>
      {children}
    </div>
  );
}
