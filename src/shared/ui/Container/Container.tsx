import clsx from 'clsx';
import type { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';

import styles from './Container.module.css';
import type { ContainerCssVars } from './types';

type StyleWithVars = CSSProperties & Partial<Record<ContainerCssVars, string | number>>;

export type ContainerProps = PropsWithChildren<{
  className?: string;
  style?: StyleWithVars;
  as?: keyof HTMLElementTagNameMap;
}> &
  HTMLAttributes<HTMLElement>;

export function Container({ as: Tag = 'div', className, style, children, ...rest }: ContainerProps) {
  return (
    <Tag className={clsx(styles.root, className)} style={style} {...rest}>
      {children}
    </Tag>
  );
}
