// Translator: World Shakespeare Bibliography Online
// Target: ^https?://(www\.)?worldshakesbib\.org
// TODO: Implement World Shakespeare Bibliography Online translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-world-shakespeare-bibliography-online.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'World Shakespeare Bibliography Online',
      translatorType: 4,
      target: '^https?://(www\.)?worldshakesbib\.org',
      minVersion: '1.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcs',
      lastUpdated: '2014-06-11 22:48:03',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
