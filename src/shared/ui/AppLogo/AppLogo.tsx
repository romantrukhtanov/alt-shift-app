import { NavLink, useLocation } from 'react-router';

import AppLogoIcon from '@/shared/assets/svg/app-logo.svg?react';
import { ROUTES } from '@/shared/routes';

import styles from './AppLogo.module.css';

export function AppLogo() {
  const location = useLocation();
  const isRootPage = location.pathname === ROUTES.applications.root;

  return (
    <NavLink
      to={ROUTES.applications.root}
      className={styles.root}
      end
      tabIndex={isRootPage ? -1 : 0}
      aria-hidden={isRootPage ? 'false' : 'true'}
    >
      <AppLogoIcon className={styles.icon} />
    </NavLink>
  );
}
