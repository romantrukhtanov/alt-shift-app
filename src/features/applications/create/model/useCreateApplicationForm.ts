import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import type { Application } from '@/entities/application';

import { createApplicationSchema, type CreateApplicationValues } from './schema';

const resolver = zodResolver(createApplicationSchema);

export type UseCreateApplicationFormProps = {
  onSubmit(values: CreateApplicationValues): Promise<void>;
  application?: Application | null;
};

export function useCreateApplicationForm({ application, onSubmit }: UseCreateApplicationFormProps) {
  const initialValues = useMemo<CreateApplicationValues>(
    () =>
      application
        ? {
            jobTitle: application.jobTitle,
            company: application.company,
            skills: application.skills,
            details: application.details,
          }
        : {
            jobTitle: '',
            company: '',
            skills: '',
            details: '',
          },
    [application],
  );

  const methods = useForm<CreateApplicationValues>({
    mode: 'onChange',
    resolver,
    defaultValues: initialValues,
  });

  const { formState, handleSubmit, reset, watch } = methods;
  const { isDirty, isValid, isSubmitting, errors } = formState;

  const jobTitle = watch('jobTitle');
  const company = watch('company');
  const detailsLength = watch('details')?.length ?? 0;

  const isSubmitDisabled = !isDirty || !isValid;

  useEffect(() => {
    reset(initialValues, { keepIsValid: true, keepDirty: true });
  }, [reset, initialValues]);

  const handleSubmitSafe = handleSubmit(async values => {
    try {
      await onSubmit(values);
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong 🥲');
    }
  });

  const resetToDefault = useCallback(() => {
    reset(initialValues);
  }, [reset, initialValues]);

  return {
    values: {
      jobTitle,
      company,
      detailsLength,
    },
    methods,
    errors,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitDisabled,
    resetToDefault,
    onSubmit: handleSubmitSafe,
  };
}
