import type { VercelRequest, VercelResponse } from '@vercel/node';

import { handleError, HttpError } from '../../_lib/errors.js';
import { openai } from '../../_lib/openai.js';
import { safeJsonParse } from '../../_uitls/safeJsonParse.js';

import { _instructionsGenerator } from './_instructionsGenerator.js';
import { generateApplicationSchema } from './_schema.js';
import type { GenerateApplicationResponse } from './_types.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'POST') {
      throw new HttpError(405, 'Method Not Allowed');
    }

    const body = generateApplicationSchema.parse(req.body);
    const { jobTitle, company, skills, details } = body;

    if (!process.env.OPENAI_API_KEY) {
      throw new HttpError(500, 'Missing AI API key');
    }

    const input = _instructionsGenerator({ jobTitle, company, skills, details });

    const response = await openai.responses.create({
      model: 'gpt-4.1-mini',
      input,
      max_output_tokens: 200,
    });

    const outputRaw = response.output_text.trim();
    const parsed = safeJsonParse<GenerateApplicationResponse>(outputRaw);

    if (parsed && Array.isArray(parsed.content)) {
      return res.status(200).json({
        content: parsed.content?.filter(Boolean),
      } satisfies GenerateApplicationResponse);
    }

    return res.status(200).json({ content: outputRaw } satisfies GenerateApplicationResponse);
  } catch (err) {
    const { status, message } = handleError(err);
    return res.status(status).json({ error: message });
  }
}
