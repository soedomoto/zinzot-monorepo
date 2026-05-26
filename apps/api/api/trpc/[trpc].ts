import { handler as vercelNodeHandler } from '../../src/adapters/vercel.js';
import { handler as fetchHandler } from '../../src/adapters/fetch.js';

export const config = {
  // Switch to 'edge' if you want to use the Edge runtime
  runtime: 'nodejs',
};

export default async function trpcEndpoint(req: any, res: any) {
  if (config.runtime === 'edge') {
    return fetchHandler(req);
  }

  return vercelNodeHandler(req, res);
}