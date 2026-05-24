// Translator: newspapers.com
// Target: ^https?://[^/]+\.newspapers\.com/(article|image)/
// TODO: Implement newspapers.com translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-newspapers-com.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'newspapers.com',
      translatorType: 4,
      target: '^https?://[^/]+\.newspapers\.com/(article|image)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-04-29 03:15:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
