import { handler } from '../../src/adapters/fetch.js';

// This is the magic export that tells Vercel to use the Edge runtime
export const config = {
  runtime: 'nodejs',
};

export default function trpcEndpoint(req: Request) {
  return handler(req);
}