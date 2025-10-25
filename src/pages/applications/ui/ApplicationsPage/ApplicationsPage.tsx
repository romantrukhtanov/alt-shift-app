import { useGoalProgress } from '@/entities/application';
import { CreateNewButton } from '@/features/applications/create';
import { useDevice } from '@/shared/hooks';
import { Container } from '@/shared/ui/Container';
import { Divider } from '@/shared/ui/Divider';
import { Text } from '@/shared/ui/Text';
import { ApplicationsList, GoalSection } from '@/widgets/applications';

import styles from './ApplicationsPage.module.css';

export function ApplicationsPage() {
  const { isReached } = useGoalProgress();
  const { isMobile } = useDevice();

  return (
    <Container className={styles.root}>
      <div className={styles.heading}>
        <div className={styles.wrapper}>
          <Text component="h1" variant="heading-lg">
            Applications
          </Text>
          {!isReached && <CreateNewButton circled={isMobile} />}
        </div>

        <Divider />
      </div>
      <ApplicationsList />

      {!isReached && <GoalSection />}
    </Container>
  );
}
