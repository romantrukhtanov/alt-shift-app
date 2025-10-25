import { useGoalProgress, type Application } from '@/entities/application';
import { CreateApplicationForm, type CreateApplicationValues } from '@/features/applications/create';
import { useGenerateApplication } from '@/features/applications/generate';
import { ApplicationPreview } from '@/features/applications/preview';
import { useScrollTo } from '@/shared/hooks';
import { resetScroll } from '@/shared/lib';
import { Container } from '@/shared/ui/Container';
import { Grid } from '@/shared/ui/Grid';
import { GridItem } from '@/shared/ui/Griditem';
import { GoalSection } from '@/widgets/applications';

import styles from './ApplicationGenerator.module.css';

type ApplicationGeneratorProps = {
  application?: Application;
  onCreateClick?(): void;
};

export function ApplicationGenerator({ application, onCreateClick }: ApplicationGeneratorProps) {
  const { currentApp, setCurrentApp, generateApplication, isLoading } = useGenerateApplication({ application });
  const { isReached } = useGoalProgress();
  const { ref, scrollTo } = useScrollTo();

  const handleGenerate = async (values: CreateApplicationValues) => {
    if (isLoading) {
      return;
    }

    const app = await generateApplication(values, { id: currentApp?.id ?? null });
    setCurrentApp(app);

    if (app) {
      scrollTo();
    }
  };

  const handleCreateClick = () => {
    if (onCreateClick) {
      onCreateClick();
    } else {
      setCurrentApp(null);
      resetScroll();
    }
  };

  const hasApplication = !!currentApp;

  return (
    <Container className={styles.root}>
      <Grid>
        <GridItem style={{ '--grid-span-desktop': 6 }}>
          <CreateApplicationForm
            application={currentApp}
            onSubmit={handleGenerate}
            isLoading={isLoading}
            hasRetry={hasApplication || isReached}
            disabled={!hasApplication && isReached}
          />
        </GridItem>
        <GridItem style={{ '--grid-span-desktop': 6 }}>
          <ApplicationPreview content={currentApp?.content} isLoading={isLoading} ref={ref} />
        </GridItem>
      </Grid>

      {hasApplication && !isReached && <GoalSection onCreateClick={handleCreateClick} />}
    </Container>
  );
}
