import clsx from 'clsx';
import { useNavigate } from 'react-router';

import PlusIcon from '@/shared/assets/svg/plus-icon.svg?react';
import { ROUTES } from '@/shared/routes';
import type { ButtonSize } from '@/shared/ui/Button';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';

import styles from './CreateNewButton.module.css';
import { textSizeMap } from './constants';

type CreateNewButtonProps = {
  size?: ButtonSize;
  circled?: boolean;
  onClick?(): void;
};

export function CreateNewButton({ circled, size = 'medium', onClick }: CreateNewButtonProps) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    navigate(ROUTES.applications.create);
  };

  return (
    <Button
      className={clsx(styles.root, styles[size], { [styles.circled]: circled })}
      size={size}
      startIcon={<PlusIcon className={clsx(styles.icon, styles[size])} />}
      onClick={handleButtonClick}
    >
      {!circled && (
        <Text component="span" variant={textSizeMap[size]} color="inherit">
          Create New
        </Text>
      )}
    </Button>
  );
}
