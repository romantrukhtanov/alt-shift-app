import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import SpinnerIconSvg from '@/shared/assets/svg/spinner-icon.svg?react';

import styles from './Button.module.css';
import type { ButtonVariant, ButtonSize } from './types';

export type ButtonProps<TElement extends ElementType = 'button'> = {
  className?: string;
  children?: ReactNode;
  component?: TElement;
  size?: ButtonSize;
  variant?: ButtonVariant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
} & Omit<ComponentPropsWithoutRef<TElement>, 'disabled' | 'children' | 'className'>;

export function Button<TElement extends ElementType = 'button'>({
  className,
  children,
  component,
  startIcon,
  endIcon,
  isLoading,
  disabled,
  size = 'medium',
  variant = 'primary',
  ...rest
}: ButtonProps<TElement>) {
  const Tag = component ?? 'button';
  const isButtonTag = Tag === 'button';

  const disabledProps = isButtonTag ? { disabled } : { 'aria-disabled': disabled || undefined };

  return (
    <Tag
      {...rest}
      {...disabledProps}
      className={clsx(
        styles.root,
        styles[size],
        styles[variant],
        { [styles.disabled]: disabled, [styles.loading]: isLoading },
        className,
      )}
    >
      {isLoading ? (
        <SpinnerIconSvg className={styles.spinner} />
      ) : (
        <>
          {startIcon}
          {children}
          {endIcon}
        </>
      )}
    </Tag>
  );
}
