import clsx from 'clsx';

import styles from './Preloader.module.css';

export type PreloaderProps = {
  className?: string;
  centered?: boolean;
};

export function Preloader({ className, centered = true, ...rest }: PreloaderProps) {
  return (
    <div className={clsx(styles.root, { [styles.centered]: centered }, className)} {...rest}>
      <div className={styles.loader} />
    </div>
  );
}
