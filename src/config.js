const env = process.env.APP_ENV ?? 'development';
const adminToken = process.env.ADMIN_TOKEN;

if (env === 'production' && (!adminToken?.trim() || adminToken === 'dev-secret')) {
  throw new Error('ADMIN_TOKEN must be configured with a non-default value in production');
}

const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535');
}

export const config = {
  env,
  port,
  dbPath: process.env.DB_PATH ?? './data/app.db',
  baseUrl: process.env.BASE_URL ?? 'http://localhost:3000',
  adminToken: adminToken ?? 'dev-secret',
  version: process.env.APP_VERSION ?? 'dev',
};
