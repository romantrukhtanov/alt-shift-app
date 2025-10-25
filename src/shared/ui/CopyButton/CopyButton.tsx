import type { MouseEvent } from 'react';

import CopyIcon from '@/shared/assets/svg/copy-icon.svg?react';
import { useCopyToClipboard } from '@/shared/hooks';
import type { ButtonProps } from '@/shared/ui/Button';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';

type CopyButtonProps = {
  copyText: string | string[];
} & ButtonProps;

export function CopyButton({ copyText, className, ...rest }: CopyButtonProps) {
  const { copy } = useCopyToClipboard();

  const handleClick = async (evt: MouseEvent) => {
    evt.stopPropagation();
    evt.preventDefault();

    if (Array.isArray(copyText)) {
      copy(copyText.join('\n\n'));
    } else {
      copy(copyText);
    }
  };

  return (
    <Button className={className} endIcon={<CopyIcon />} variant="secondary" onClick={handleClick} {...rest}>
      <Text component="span" variant="text-md" weight="semibold" color="inherit">
        Copy to clipboard
      </Text>
    </Button>
  );
}
