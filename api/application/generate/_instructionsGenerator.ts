import type { ResponseInput } from 'openai/resources/responses/responses';

import type { GenerateApplicationInput } from './_schema.js';

export const _instructionsGenerator = ({
  jobTitle,
  details,
  company,
  skills,
}: GenerateApplicationInput): ResponseInput => {
  return [
    {
      role: 'system',
      content: `You are a professional copywriter. Write clearly, succinctly, and in a professional yet approachable tone.`,
    },
    {
      role: 'user',
      content: `
Create a short (150-200 words) engaging cover letter using the info:
- jobTitle: ${jobTitle}
- company: ${company}
- skills: ${skills}
- details: ${details}

Follow this structure:
---
Dear ${company} Team,

I am writing to express my interest in the ${jobTitle} position.

My experience in ${skills} makes me a strong candidate for this role.

${details || 'I deeply admire your company’s mission and values, and I am excited about the opportunity to contribute to your success.'}

I am confident that my skills and enthusiasm will translate into valuable contributions to your esteemed organization.

Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.

Best regards,  
[Your Name]
---

Guidelines:
1. Keep tone professional yet approachable.
2. Replace placeholders like "[Your Name]".
3. Output **valid JSON** with one key "content".
4. "content" = string array, each element — paragraph.
5. No extra keys or text outside JSON.
        `,
    },
  ];
};
