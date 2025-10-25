import clsx from 'clsx';

import styles from './ProgressSteps.module.css';

type StepsProps = {
  stepLength: number;
  currentStep: number;
  size?: 'small' | 'large';
};

export function ProgressSteps({ stepLength, currentStep, size = 'small' }: StepsProps) {
  return (
    <div className={clsx(styles.root, styles[size])}>
      {new Array(stepLength).fill(0).map((_, index) => (
        <div key={index} className={clsx(styles.dot, styles[size], { [styles.active]: index < currentStep })} />
      ))}
    </div>
  );
}
