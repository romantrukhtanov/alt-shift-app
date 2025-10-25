import clsx from 'clsx';

import type { Application } from '@/entities/application';
import { useCreateApplicationForm } from '@/features/applications/create/model';
import { type CreateApplicationValues } from '@/features/applications/create/model';
import RetryIcon from '@/shared/assets/svg/retry-icon.svg?react';
import { Button } from '@/shared/ui/Button';
import { Divider } from '@/shared/ui/Divider';
import { FormInput } from '@/shared/ui/FormInput/FormInput';
import { Text } from '@/shared/ui/Text';

import styles from './CreateApplicationForm.module.css';
import { FormDetailsCounter } from './components/FormDetailsCounter';
import { FormHeader } from './components/FormHeader';

const formId = 'application-form';

type CreateApplicationFormProps = {
  onSubmit: (data: CreateApplicationValues) => Promise<void>;
  application?: Application | null;
  isLoading?: boolean;
  hasRetry?: boolean;
  disabled?: boolean;
};

export function CreateApplicationForm({
  application,
  onSubmit,
  isLoading,
  hasRetry,
  disabled,
}: CreateApplicationFormProps) {
  const {
    values,
    methods,
    errors,
    isSubmitDisabled,
    onSubmit: handleSubmit,
  } = useCreateApplicationForm({ application, onSubmit });

  return (
    <form id={formId} onSubmit={handleSubmit} className={clsx(styles.root, { [styles.loading]: isLoading })}>
      <div className={styles.header}>
        <FormHeader jobTitle={values.jobTitle} company={values.company} />
        <Divider />
      </div>

      <div className={styles.inputsContainer}>
        <FormInput
          {...methods.register('jobTitle')}
          className={styles.inputsItem}
          id="job-title"
          label="Job title"
          placeholder="Product manager"
          isError={Boolean(errors.jobTitle?.message)}
          disabled={disabled}
        />

        <FormInput
          {...methods.register('company')}
          className={styles.inputsItem}
          id="company"
          label="Company"
          placeholder="Apple"
          isError={Boolean(errors.company?.message)}
          disabled={disabled}
        />
      </div>

      <FormInput
        {...methods.register('skills')}
        id="skills"
        label="I am good at..."
        placeholder="HTML, CSS and doing things in time"
        isError={Boolean(errors.skills?.message)}
        disabled={disabled}
      />

      <FormInput
        {...methods.register('details')}
        component="textarea"
        id="details"
        label="Additional details"
        placeholder="Describe why you are a great fit or paste your bio"
        isError={Boolean(errors.details?.message)}
        inputClassName={styles.details}
        disabled={disabled}
      >
        <FormDetailsCounter currentLength={values.detailsLength} isError={Boolean(errors.details?.message)} />
      </FormInput>

      <Button
        className={styles.button}
        form={formId}
        size="large"
        disabled={isSubmitDisabled}
        isLoading={isLoading}
        variant={hasRetry ? 'outline' : 'primary'}
        startIcon={hasRetry && <RetryIcon className={styles.icon} />}
      >
        <Text component="span" variant="text-lg" weight="semibold" color="inherit">
          {hasRetry && !disabled ? 'Try Again' : 'Generate Now'}
        </Text>
      </Button>
    </form>
  );
}
