import { nodeHTTPRequestHandler } from '@trpc/server/adapters/node-http';
import { implementedRouter } from '../../src/router/index.js';
import { createContext } from '../../src/context.js';

export const config = {
  runtime: 'nodejs',
};

export default async function trpcEndpoint(req: any, res: any) {
  // Extract path matching '/api/trpc/...' from the url
  const path = req.url?.split('/api/trpc/').pop()?.split('?')[0] || '';

  return nodeHTTPRequestHandler({
    router: implementedRouter,
    createContext: () => createContext(),
    req,
    res,
    path,
  });
}