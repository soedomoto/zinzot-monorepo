import fastify from 'fastify';
import cors from '@fastify/cors';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { implementedRouter } from '../router/index.js';
import { createContext } from '@zinzot/contracts';

const app = fastify();

await app.register(cors);

await app.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: {
    router: implementedRouter,
    createContext,
  },
});

const port = parseInt(process.env.PORT || '3001');

app.listen({ port, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`✓ tRPC Fastify running on ${address}`);
  console.log(`✓ tRPC endpoint: ${address}/trpc`);
});
