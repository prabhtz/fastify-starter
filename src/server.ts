import fastify from 'fastify';

import app from './app';
import config from './config';

const server = fastify({
  logger: {
    prettyPrint: true
  }
});

server.register(app);

/**
 * Entry point for server.
 */
async function start() {
  const { port } = config;

  try {
    server.listen(port);
  } catch (e) {
    server.log.error(e);

    process.exit(1);
  }
}

start();

