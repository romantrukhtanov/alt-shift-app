/**
 * Represents supported job document types.
 * Built for future extensibility (e.g., add "resume", "portfolio", etc.).
 */
export type JobDocumentType = 'application';

export type BaseJobDocument<JobDocument extends object = {}> = JobDocument & {
  id: string;
  createdAt: string;
  type: JobDocumentType;
};
