import { nodeHTTPRequestHandler } from '@trpc/server/adapters/node-http';
import { implementedRouter } from '../router/index.js';
import { createContext } from '@zinzot/contracts';

export const handler = async (req: any, res: any) => {
  const path = req.url?.split('/api/trpc/').pop()?.split('?')[0] || '';

  return nodeHTTPRequestHandler({
    router: implementedRouter,
    createContext: () => createContext(),
    req,
    res,
    path,
  });
};