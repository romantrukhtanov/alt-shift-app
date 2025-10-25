import styles from '@/pages/not-found/ui/NotFoundPage.module.css';
import { Container } from '@/shared/ui/Container';
import { Divider } from '@/shared/ui/Divider';
import { Text } from '@/shared/ui/Text';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

export function ErrorBoundary() {
  return (
    <>
      <Header />
      <main className={styles.root}>
        <Container className={styles.container}>
          <Divider />
          <Text component="h1" variant="heading-lg">
            Something went wrong 🥲
          </Text>
        </Container>
      </main>
      <Footer />
    </>
  );
}
