export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT) || 3306,
    username: process.env.DATABASE_USERNAME || 'shura-api',
    password: process.env.DATABASE_PASSWORD || 'shura-api',
    name: process.env.DATABASE_NAME || 'shura-api',
    synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE) || true,
    logging: Boolean(process.env.DATABASE_LOGGING) || true,
  },
  stackdrive: {
    active: Boolean(process.env.STACKDRIVE_ACTIVE) || false,
    projectId: process.env.GOOGLE_PROJECT_ID,
    path: process.env.GOOGLE_CREDENTIAL_PATH,
  },
  logger: {
    level: process.env.LOGGER_LEVEL || 'debug',
    label: process.env.LOGGER_LABEL || 'development'
  }
});