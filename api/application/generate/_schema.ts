import { z } from 'zod';

export const generateApplicationSchema = z.object({
  jobTitle: z.string().nonempty('Enter the job title').max(100, 'Job title is too long'),
  company: z.string().nonempty('Enter the company name').max(100, 'Company name is too long'),
  skills: z.string().nonempty('Describe at least one skill').max(200, 'Skills description is too long'),
  details: z.string().nonempty('Enter the details').max(1200, 'Maximum is 1200 characters'),
});

export type GenerateApplicationInput = z.infer<typeof generateApplicationSchema>;
