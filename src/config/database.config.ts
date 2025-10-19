import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'mongodb',
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 27017,
  database: process.env.DATABASE_NAME || 'catalog-db',
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV === 'development',
  logger: 'advanced-console',
}));
