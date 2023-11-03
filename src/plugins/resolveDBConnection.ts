import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

async function resolveDBConnection(fastify: FastifyInstance, opts: object) {

}

export default fastifyPlugin(resolveDBConnection);
