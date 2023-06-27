import { registerAs } from '@nestjs/config';

export interface OpenApiConfig {
  title: string;
  description: string;
  version: string;
}

export default registerAs(
  'open-api',
  (): OpenApiConfig => ({
    title: 'NestJS API',
    description: 'The NestJS in action!',
    version: '1.0.0',
  }),
);
