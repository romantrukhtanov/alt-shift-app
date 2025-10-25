import { CreateNewButton } from '@/features/applications/create';
import { ProgressTracker } from '@/features/applications/progress';
import { Text } from '@/shared/ui/Text';

import styles from './GoalSection.module.css';
import { DEFAULT_DESCRIPTION } from './constants';

type GoalCompletionCardProps = {
  description?: string;
  onCreateClick?(): void;
};

export function GoalSection({ onCreateClick, description = DEFAULT_DESCRIPTION }: GoalCompletionCardProps) {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <div className={styles.info}>
          <Text component="h3" variant="heading-md">
            Hit your goal
          </Text>
          <Text variant="body" color="secondary">
            {description}
          </Text>
          <CreateNewButton size="large" onClick={onCreateClick} />
        </div>

        <ProgressTracker />
      </div>
    </section>
  );
}
