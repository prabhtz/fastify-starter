import { FastifyInstance } from 'fastify';

import * as homeController from '../controllers/home';
import { AppInfoResponseSchema } from '../schemas/home';

/**
 * Entry point for '/' route.
 *
 * @param {FastifyInstance} app
 */
async function home(app: FastifyInstance) {
  app.get('/', {
    schema: AppInfoResponseSchema,
    handler: homeController.getAppInfo
  })
}

export default home;

