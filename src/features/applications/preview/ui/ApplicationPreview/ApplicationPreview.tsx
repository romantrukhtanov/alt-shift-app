import clsx from 'clsx';
import { forwardRef } from 'react';

import { ApplicationContent } from '@/entities/application';
import { DEFAULT_PREVIEW_CONTENT } from '@/features/applications/preview/model';
import { CopyButton } from '@/shared/ui/CopyButton';
import { Preloader } from '@/shared/ui/Preloader';

import styles from './ApplicationPreview.module.css';

type ApplicationPreviewProps = {
  content?: string[];
  className?: string;
  isLoading?: boolean;
};

export const ApplicationPreview = forwardRef<HTMLDivElement, ApplicationPreviewProps>(
  ({ className, content, isLoading, ...rest }, ref) => {
    const previewContent = content || [DEFAULT_PREVIEW_CONTENT];
    const hasContent = !!content;

    return (
      <div ref={ref} className={clsx(styles.root, className)} {...rest}>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <ApplicationContent content={previewContent} />
            <div className={styles.actions}>
              <CopyButton
                className={clsx(styles.copy, { [styles.disabled]: !hasContent })}
                copyText={previewContent}
                tabIndex={hasContent ? 0 : -1}
                aria-hidden={hasContent ? 'true' : 'false'}
              />
            </div>
          </>
        )}
      </div>
    );
  },
);

ApplicationPreview.displayName = 'ApplicationPreview';
