import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter, CheckExistsInput, SaveWebResultRequestInput } from "@zinzot/contracts";
import { defineProxy } from 'comctx';

const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3333",
    }),
  ],
});

export class API {
  async greet(name: string) {
    return `Hello, ${name}!`;
  }
  async authGoogle() {
    return trpcClient.auth.google.mutate({ idToken: "dummy-token" }); 
  }
  async referencesCheckExists(input: CheckExistsInput) {
    return trpcClient.references.checkExists.mutate(input);
  }
  async saveReferences(input: SaveWebResultRequestInput) {
    return trpcClient.references.save.mutate(input);
  }
}

export const [provideAPI, injectAPI] = defineProxy(() => new API(), {
  namespace: '__zinzot__',
  heartbeatTimeout: 10000,
});
