import { useNavigate } from 'react-router';

import HomeIcon from '@/shared/assets/svg/home-icon.svg?react';
import { ROUTES } from '@/shared/routes';
import type { ButtonProps } from '@/shared/ui/Button';
import { Button } from '@/shared/ui/Button';

type HomeButtonProps = {
  className?: string;
} & ButtonProps;

export function HomeButton({ className }: HomeButtonProps) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(ROUTES.applications.root);
  };

  return (
    <Button className={className} variant="outline" size="small" onClick={handleButtonClick}>
      <HomeIcon />
    </Button>
  );
}
