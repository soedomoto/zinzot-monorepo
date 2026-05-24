import cors from 'cors';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { implementedRouter } from '../router/index';
import { createContext } from '../context';

const corsHandler = cors();

const server = createHTTPServer({
  router: implementedRouter,
  createContext,
  middleware: (req, res, next) => {
    corsHandler(req as any, res as any, (err) => {
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
