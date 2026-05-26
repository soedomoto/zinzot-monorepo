import { handler } from '../../src/adapters/fetch.js';

// This is the magic export that tells Vercel to use the Edge runtime
export const config = {
  runtime: 'nodejs',
};

export default function trpcEndpoint(req: Request) {
  // Vercel nodejs runtime passes a relative url. We need an absolute URL
  const url = new URL(req.url, `http://${req.headers.get('host') || 'localhost'}`);
  const request = new Request(url, req);
  return handler(request);
}