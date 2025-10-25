import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

import styles from './Divider.module.css';

type DividerProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Divider({ className, ...rest }: DividerProps) {
  return <div {...rest} className={clsx(styles.root, className)} />;
}
