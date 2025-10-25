import clsx from 'clsx';

import { Text } from '@/shared/ui/Text';

import styles from './ApplicationContent.module.css';

type ApplicationPreviewContentProps = {
  content: string[];
  className?: string;
};

export function ApplicationContent({ className, content }: ApplicationPreviewContentProps) {
  return (
    <div className={clsx(styles.root, className)}>
      {content.map((contentItem, index) => (
        <Text key={`preview-text${index}`} className={styles.text} variant="text-lg" color="secondary">
          {contentItem}
        </Text>
      ))}
    </div>
  );
}
