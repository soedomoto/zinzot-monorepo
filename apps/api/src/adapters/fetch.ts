import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { implementedRouter } from '../router/index.js';
import { createContext } from '@zinzot/contracts';

export const handler = (request: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: implementedRouter,
    createContext: () => createContext(),
  });
