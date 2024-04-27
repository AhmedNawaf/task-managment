import { z } from 'zod';

const envSchema = z.object({
  VITE_SERVER_URL: z.string(),
});

export function initEnv() {
  const env = envSchema.safeParse(import.meta.env);
  if (!env.success) {
    const errors = env.error.errors;
    errors.forEach((error) => {
      console.error(
        `${error.path[0]} is missing, Please include the variable in your .env file`,
      );
    });
    throw new Error('Please compare .env variables and config file');
  }
}
