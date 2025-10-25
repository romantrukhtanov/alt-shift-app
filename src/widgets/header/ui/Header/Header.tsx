import { ProgressTracker } from '@/features/applications/progress';
import { AppLogo } from '@/shared/ui/AppLogo';
import { Container } from '@/shared/ui/Container';
import { HomeButton } from '@/shared/ui/HomeButton';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.root}>
      <Container className={styles.container}>
        <AppLogo />
        <div className={styles.info}>
          <ProgressTracker compact />
          <HomeButton />
        </div>
      </Container>
    </header>
  );
}
