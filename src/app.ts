import { join } from 'path';
import autoload from '@fastify/autoload';
import { FastifyInstance } from 'fastify';

/**
 * Entry point for app.
 *
 * @param {FastifyInstance} fastify
 * @returns {Promise<void>}
 */
async function app(fastify: FastifyInstance): Promise<void> {
  // Load and register all the routes.
  fastify.register(autoload, {
    dir: join(__dirname, 'routes'),
    options: {
      prefix: '/api'
    }
  });
}

export default app;
