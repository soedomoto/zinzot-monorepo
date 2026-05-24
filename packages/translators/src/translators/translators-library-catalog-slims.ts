// Translator: Library Catalog (SLIMS)
// Target: (^https?://makassarlib\.net|^https?://kit\.ft\.ugm\.ac\.id/ucs|/libsenayan)/index\.php
// TODO: Implement Library Catalog (SLIMS) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-slims.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (SLIMS)',
      translatorType: 4,
      target: '(^https?://makassarlib\.net|^https?://kit\.ft\.ugm\.ac\.id/ucs|/libsenayan)/index\.php',
      minVersion: '2.1',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcv',
      lastUpdated: '2014-08-26 04:10:09',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
