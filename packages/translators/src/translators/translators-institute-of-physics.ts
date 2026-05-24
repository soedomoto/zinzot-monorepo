// Translator: Institute of Physics
// Target: ^https?://iopscience\.iop\.org/((article/10\.[^/]+/)?[0-9-X]+/.+|n?search\?.+)
// TODO: Implement Institute of Physics translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-institute-of-physics.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Institute of Physics',
      translatorType: 4,
      target: '^https?://iopscience\.iop\.org/((article/10\.[^/]+/)?[0-9-X]+/.+|n?search\?.+)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 99,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2016-11-01 12:54:14',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
