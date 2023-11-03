import fastify from 'fastify';

import app from './app';
import config from './config';
import { getLoggerConfigurationPerEnv } from './utils/logger';

const server = fastify({
  logger: getLoggerConfigurationPerEnv()
});

/**
 * Entry point for server.
 */
async function start() {
  const { host, port } = config;

  try {
    server.register(app);

    await server.listen({ host, port: +port });
  } catch (e) {
    server.log.error(e);

    process.exit(1);
  }
}

start();

