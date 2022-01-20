import { join } from 'path';
import autoload from 'fastify-autoload';
import { FastifyInstance } from 'fastify';

/**
 * Entry point for app.
 *
 * @param {FastifyInstance} fastify
 * @param {any} opts
 * @returns {Promise<void>}
 */
async function app(fastify: FastifyInstance, opts: any = {}): Promise<void> {
  // Load and register all the routes.
  fastify.register(autoload, {
    dir: join(__dirname, 'routes'),
    options: {
      ...opts,
      prefix: '/api'
    }
  });
}

export default app;
