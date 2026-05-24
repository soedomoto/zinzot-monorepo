// Translator: Libraries Tasmania
// Target: ^https?://librariestas\.ent\.sirsidynix\.net\.au/client/en_AU/
// TODO: Implement Libraries Tasmania translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-libraries-tasmania.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Libraries Tasmania',
      translatorType: 4,
      target: '^https?://librariestas\.ent\.sirsidynix\.net\.au/client/en_AU/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-01-29 19:05:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
