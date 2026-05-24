// Translator: Library Catalog (Aleph)
// Target: ^https?://[^/]+/F(/?[A-Z0-9\-]*(\?.*)?$|\?func=find|\?func=scan|\?func=short|\?local_base=)
// TODO: Implement Library Catalog (Aleph) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-aleph.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (Aleph)',
      translatorType: 4,
      target: '^https?://[^/]+/F(/?[A-Z0-9\-]*(\?.*)?$|\?func=find|\?func=scan|\?func=short|\?local_base=)',
      minVersion: '1.0.0b3.r1',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsb',
      lastUpdated: '2021-05-21 03:54:32',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
