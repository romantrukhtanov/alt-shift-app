import { Container } from '@/shared/ui/Container';
import { Divider } from '@/shared/ui/Divider';
import { Text } from '@/shared/ui/Text';

import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <Container className={styles.container}>
      <Divider />
      <Text component="h1" variant="heading-lg">
        Not Found Page 🥲
      </Text>
    </Container>
  );
}
