import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import styles from './FormInput.module.css';

export type FormInputProps<TElement extends ElementType = 'input'> = {
  id: string;
  component?: TElement;
  label?: string;
  isError?: boolean;
  className?: string;
  disabled?: boolean;
  labelClassName?: string;
  inputClassName?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<TElement>, 'className' | 'children'>;

export function FormInput<TElement extends ElementType = 'input'>({
  id,
  component,
  label,
  isError,
  className,
  disabled,
  labelClassName,
  inputClassName,
  children,
  ...rest
}: FormInputProps<TElement>) {
  const Tag = component ?? 'input';
  const isTextarea = Tag === 'textarea';

  return (
    <div className={clsx(styles.root, className)}>
      {label && (
        <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
          {label}
        </label>
      )}

      <Tag
        {...rest}
        id={id}
        disabled={disabled}
        className={clsx(styles.input, { [styles.error]: isError, [styles.textarea]: isTextarea }, inputClassName)}
      />
      {children}
    </div>
  );
}
