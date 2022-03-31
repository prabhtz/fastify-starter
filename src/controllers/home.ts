import { FastifyReply, FastifyRequest } from 'fastify';

import * as homeService from '../services/home';

/**
 * Get application information.
 */
export async function getAppInfo(request: FastifyRequest, reply: FastifyReply) {
  const data = await homeService.getAppInfo();

  reply.send(data);
}
