// Translator: VoxEU
// Target: ^https?://(www\.)?voxeu\.org
// TODO: Implement VoxEU translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-voxeu.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'VoxEU',
      translatorType: 4,
      target: '^https?://(www\.)?voxeu\.org',
      minVersion: '1.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-06-12 14:39:41',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
