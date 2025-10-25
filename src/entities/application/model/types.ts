import type { BaseJobDocument } from '@/shared/types';

export type Application = BaseJobDocument<{
  jobTitle: string;
  company: string;
  skills: string;
  details: string;
  content: string[];
}>;
