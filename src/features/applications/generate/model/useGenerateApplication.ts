import { useState } from 'react';

import { type Application, useApplicationActions } from '@/entities/application/model';
import type { CreateApplicationValues } from '@/features/applications/create';
import { fetcher, API_PATHS } from '@/shared/api';
import type { GenerateAppResponse } from '@/shared/api/types';

type UseGenerateApplicationProps = {
  application?: Application | null;
};

export const useGenerateApplication = ({ application }: UseGenerateApplicationProps = {}) => {
  const { add, update } = useApplicationActions();
  const [isLoading, setIsLoading] = useState(false);
  const [currentApp, setCurrentApp] = useState<Application | null>(application ?? null);

  const generateApplication = async (values: CreateApplicationValues, options?: { id?: string | null }) => {
    if (isLoading) {
      return null;
    }

    setIsLoading(true);

    try {
      const response = await fetcher<GenerateAppResponse>(API_PATHS.application.generate, {
        method: 'POST',
        body: JSON.stringify(values),
      });

      const content = Array.isArray(response.content) ? response.content : [response.content];

      if (options?.id) {
        return update(options.id, {
          ...values,
          content,
        });
      } else {
        return add({
          ...values,
          content,
        });
      }
    } catch (error) {
      console.error('Failed to generate application:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { currentApp, isLoading, setCurrentApp, generateApplication };
};
