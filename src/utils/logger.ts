import config from '../config';

const { env, logger } = config;

const loggerConfiguration: Record<string, object> = {
  local: {
    enabled: logger.enabled,
    level: logger.level,
    // Use pino-pretty in dev environment.
    // Level to determine what level of logs to transport.
    transport: {
      target: 'pino-pretty',
      level: logger.level,
      options: {
        ignore: 'pid, hostname'
      }
    }
  }
};

export function getLoggerConfigurationPerEnv() {
  // return true to enable default settings for the logger.
  return loggerConfiguration[env] || true;
}
