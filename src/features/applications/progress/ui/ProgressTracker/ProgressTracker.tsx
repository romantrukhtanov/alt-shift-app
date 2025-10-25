'use client';

import clsx from 'clsx';

import { useGoalProgress } from '@/entities/application';
import CheckIcon from '@/shared/assets/svg/check-icon.svg?react';
import { useDevice } from '@/shared/hooks';
import { Text } from '@/shared/ui/Text';

import { ProgressSteps } from '../ProgressSteps';

import styles from './ProgressTracker.module.css';

export type ProgressTrackerProps = {
  compact?: boolean;
};

export function ProgressTracker({ compact }: ProgressTrackerProps) {
  const { count, goal, isReached } = useGoalProgress();
  const { isMobile } = useDevice();

  if (compact) {
    return (
      <div className={clsx(styles.root, { [styles.small]: compact })}>
        <Text variant="body" color="secondary">
          {count}/{goal} {!isMobile && <span className={styles.text}>applications generated</span>}
        </Text>

        {isReached ? <CheckIcon /> : !isMobile && <ProgressSteps stepLength={goal} currentStep={count} />}
      </div>
    );
  }

  return (
    <div className={clsx(styles.root, { [styles.large]: !compact })}>
      <ProgressSteps stepLength={goal} currentStep={count} size="large" />
      <Text variant="body" color="secondary">
        {count} out of {goal}
      </Text>
    </div>
  );
}
