import { useApplicationActions, useApplications } from '@/entities/application';
import { ApplicationCard } from '@/entities/application/ui/ApplicationCard';

import styles from './ApplicationsList.module.css';

export function ApplicationsList() {
  const { remove } = useApplicationActions();
  const applications = useApplications();

  if (!applications?.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      {applications.map(({ id, content }) => (
        <ApplicationCard id={id} content={content} onDelete={remove} key={id} />
      ))}
    </div>
  );
}
