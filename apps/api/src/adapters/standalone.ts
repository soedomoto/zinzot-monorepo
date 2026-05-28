import cors from 'cors';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { implementedRouter } from '../router/index.js';
import { createContext } from '@zinzot/contracts';
import type { IncomingMessage, ServerResponse } from 'http';

const corsHandler = cors();

const server = createHTTPServer({
  router: implementedRouter,
  createContext,
  middleware: (req: IncomingMessage, res: ServerResponse, next: (err?: unknown) => void) => {
    // cors expects Express-like req/res, we cast to any for runtime compatibility
    corsHandler(req as any, res as any, (err: unknown) => {
      if (err) return next(err);
      next();
    });
  },
  batching: {
    enabled: true,
  },
});

const port = parseInt(process.env.PORT || '3000');

server.listen(port, 'localhost', () => {
  console.log(`✓ tRPC Standalone Server running on http://localhost:${port}`);
  console.log(`✓ tRPC endpoint: http://localhost:${port}`);
  console.log('');
  console.log('Try:');
  console.log(`  curl "http://localhost:${port}/user.list"`);
  console.log(`  curl "http://localhost:${port}/user.get?input=1"`);
});
