import { ZodError } from 'zod';

export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

export function handleError(err: unknown): { status: number; message: string } {
  if (err instanceof HttpError) {
    return { status: err.status, message: err.message };
  }

  if (err instanceof ZodError) {
    return { status: 400, message: err.message };
  }

  console.error('[Unhandled Error]', err);
  return { status: 500, message: 'Internal Server Error' };
}
