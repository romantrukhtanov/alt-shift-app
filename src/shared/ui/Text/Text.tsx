import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import styles from './Text.module.css';
import type { TextColor, TextVariant, TextWeight } from './types';

export type TextProps<TElement extends ElementType = 'p'> = {
  component?: TElement;
  variant?: TextVariant;
  color?: TextColor;
  weight?: TextWeight;
  className?: string;
  uppercased?: boolean;
  centered?: boolean;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<TElement>, 'color' | 'className' | 'children'>;

export function Text<TElement extends ElementType = 'p'>({
  className,
  children,
  component,
  uppercased,
  centered,
  weight,
  color = 'primary',
  variant = 'body',
  ...rest
}: TextProps<TElement>) {
  const Tag = component ?? 'p';

  return (
    <Tag
      {...rest}
      className={clsx(
        styles.root,
        styles[variant],
        styles[color],
        weight && styles[weight],
        { [styles.uppercase]: uppercased, [styles.center]: centered },
        className,
      )}
    >
      {children}
    </Tag>
  );
}
