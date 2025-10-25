import type { ButtonSize } from '@/shared/ui/Button';
import type { TextVariant } from '@/shared/ui/Text/types';

export const textSizeMap: Record<ButtonSize, TextVariant> = {
  small: 'text-sm',
  medium: 'text-md',
  large: 'text-lg',
};
