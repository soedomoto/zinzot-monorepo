import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { implementedRouter } from '../router/index';
import { createContext } from '../context';

export const handler = (request: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: implementedRouter,
    createContext: () => createContext(),
  });
