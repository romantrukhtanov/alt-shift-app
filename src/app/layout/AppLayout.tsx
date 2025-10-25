import { Outlet } from 'react-router';

import { ScrollToTop } from '@/app/providers';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import styles from './AppLayout.module.css';

export function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className={styles.root}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
