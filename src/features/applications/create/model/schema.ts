import { z } from 'zod';

import { JOB_TITLE_MAX_LENGTH, COMPANY_MAX_LENGTH, SKILLS_MAX_LENGTH, DETAILS_MAX_LENGTH } from './constants';

export const createApplicationSchema = z.object({
  jobTitle: z.string().nonempty('Enter the job title').max(JOB_TITLE_MAX_LENGTH, 'Job title is too long'),
  company: z.string().nonempty('Enter the company name').max(COMPANY_MAX_LENGTH, 'Company name is too long'),
  skills: z.string().nonempty('Describe at least one skill').max(SKILLS_MAX_LENGTH, 'Skills description is too long'),
  details: z.string().nonempty('Enter the details').max(DETAILS_MAX_LENGTH, 'Maximum is 1200 characters'),
});

export type CreateApplicationValues = z.infer<typeof createApplicationSchema>;
