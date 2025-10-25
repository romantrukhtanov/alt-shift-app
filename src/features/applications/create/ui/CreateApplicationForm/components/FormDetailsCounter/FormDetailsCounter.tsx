import clsx from 'clsx';

import { DETAILS_MAX_LENGTH } from '@/features/applications/create';
import { Text } from '@/shared/ui/Text';

import styles from './FormDetailsCounter.module.css';

export type FormDetailsCounterProps = {
  currentLength: number;
  isError: boolean;
};

export function FormDetailsCounter({ currentLength, isError }: FormDetailsCounterProps) {
  return (
    <Text
      className={clsx(styles.root, { [styles.error]: isError })}
      component="span"
      color="tertiary"
      variant="text-sm"
    >
      {currentLength}/{DETAILS_MAX_LENGTH}
    </Text>
  );
}
