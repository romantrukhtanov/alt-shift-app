import clsx from 'clsx';
import type { MouseEvent } from 'react';
import { NavLink } from 'react-router';

import TrashCanIcon from '@/shared/assets/svg/trash-can-icon.svg?react';
import { ROUTES } from '@/shared/routes';
import { Button } from '@/shared/ui/Button';
import { CopyButton } from '@/shared/ui/CopyButton';
import { Text } from '@/shared/ui/Text';

import { ApplicationContent } from '../ApplicationContent';

import styles from './ApplicationCard.module.css';

type LetterCardProps = {
  id: string;
  content: string[];
  onDelete: (id: string) => void;
  className?: string;
};

export function ApplicationCard({ id, content, className, onDelete, ...rest }: LetterCardProps) {
  const handleClick = (evt: MouseEvent) => {
    evt.stopPropagation();
    evt.preventDefault();
    onDelete(id);
  };

  return (
    <div className={clsx(styles.root, className)} {...rest}>
      <NavLink to={ROUTES.applications.details(id)} className={styles.link}>
        <ApplicationContent className={styles.content} content={content}></ApplicationContent>

        <div className={styles.actions}>
          <Button startIcon={<TrashCanIcon />} onClick={handleClick} variant="danger">
            <Text component="span" variant="text-md" weight="semibold" color="inherit">
              Delete
            </Text>
          </Button>

          <CopyButton copyText={content} />
        </div>
      </NavLink>
    </div>
  );
}
