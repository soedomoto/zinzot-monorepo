import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter, AuthOutput, CheckExistsInput, SaveWebResultRequestInput } from "@zinzot/contracts";
import { defineProxy } from 'comctx';
import { storage } from "./storage";

const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      // url: "http://localhost:3333",
      // url: "https://zinzot-api.soedomoto.com/api/trpc/",
      url: import.meta.env.VITE_API_URL || "https://zinzot-api.soedomoto.com/api/trpc/",
      async headers() {
        if (storage) {
          const authData = await storage.get("auth") as AuthOutput | null;
          if (authData) {
            return { Authorization: `Bearer ${authData.token}` };
          }
        }

        return {};
      },
    }),
  ],
});

export class API {
  async greet(name: string) {
    return `Hello, ${name}!`;
  }
  async authGoogle(): Promise<AuthOutput | null> {
    if (storage) {
      const authData = await storage.get("auth");
      if (authData) {
        return authData as AuthOutput;
      }
    }

    if (typeof browser !== 'undefined' && browser.identity) {
      const redirectUri = browser.identity.getRedirectURL();

      const authUrl =
        "https://accounts.google.com/o/oauth2/v2/auth" +
        `?client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}` +
        `&response_type=code` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&scope=openid email profile` +
        `&access_type=offline` +
        `&prompt=consent`;

      const responseUrl = await browser.identity.launchWebAuthFlow({
        url: authUrl,
        interactive: true
      });

      const code = new URL(responseUrl!).searchParams.get("code");
      if (!code) {
        throw new Error("Authorization code not found in the response URL.");
      }

      const result = await trpcClient.auth.google.mutate({ code, redirectUri });

      // Store the token in storage
      await storage.set("auth", result);

      return result;
    }

    return null;
  }
  async referencesCheckExists(input: CheckExistsInput) {
    return trpcClient.references.checkExists.mutate(input);
  }
  async saveReferences(input: SaveWebResultRequestInput) {
    return trpcClient.references.save.mutate(input);
  }
  async getPutAttachmentPresignedUrl(name: string, mimeType: string) {
    return trpcClient.attachments.getPutPresignedUrl.query({ name, mimeType });
  }
}

export const [provideAPI, injectAPI] = defineProxy(() => new API(), {
  namespace: '__zinzot__',
  heartbeatTimeout: 10000,
  transfer: true,
});
