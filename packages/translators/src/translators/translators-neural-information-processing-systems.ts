// Translator: Neural Information Processing Systems
// Target: ^https?://(papers|proceedings)\.n(eur)?ips\.cc/
// TODO: Implement Neural Information Processing Systems translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-neural-information-processing-systems.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Neural Information Processing Systems',
      translatorType: 4,
      target: '^https?://(papers|proceedings)\.n(eur)?ips\.cc/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-03-28 18:01:24',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
