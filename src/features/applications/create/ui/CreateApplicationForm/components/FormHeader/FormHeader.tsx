import { memo } from 'react';

import { Text } from '@/shared/ui/Text';

export type FormHeaderProps = {
  jobTitle: string;
  company?: string;
};

export const FormHeader = memo(({ jobTitle, company }: FormHeaderProps) => {
  if (jobTitle) {
    return (
      <Text variant="heading-md">
        {jobTitle}
        {company && `, ${company}`}
      </Text>
    );
  }

  return (
    <Text variant="heading-md" color="secondary">
      New application
    </Text>
  );
});
