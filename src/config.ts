import dotenv from 'dotenv';

interface LoggerConfiguration {
  level: string;
  enabled: boolean;
}

interface Configuration {
  env: string;
  port: string;
  host: string;
  logger: LoggerConfiguration;
}

dotenv.config();

const config: Configuration = {
  env: process.env.NODE_ENV || 'local',
  port: process.env.API_PORT || '3000',
  host: process.env.HOST || 'localhost',
  logger: {
    level: process.env.LOG_LEVEL || 'debug',
    enabled: process.env.LOG_ENABLED === 'false' ? false : true
  }
};

export default config;
