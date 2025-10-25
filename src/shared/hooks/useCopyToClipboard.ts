import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { copyToClipboard } from '@/shared/lib/copyToClipboard';

export type UseCopyToClipboardProps = {
  successMessage?: string;
  errorMessage?: string;
};

export function useCopyToClipboard(props: UseCopyToClipboardProps = {}) {
  const { successMessage = 'Copied', errorMessage = 'Failed to copy' } = props;

  const handleCopy = useCallback(
    async (text: string) => {
      const isCopied = await copyToClipboard(text);

      if (isCopied) {
        toast.success(successMessage);
      } else {
        toast.error(errorMessage);
      }

      return isCopied;
    },
    [successMessage, errorMessage],
  );

  return { copy: handleCopy };
}
