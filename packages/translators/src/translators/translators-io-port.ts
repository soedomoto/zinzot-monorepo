// Translator: io-port
// Target: ^https?://www\.zentralblatt-math\.org/ioport/
// TODO: Implement io-port translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-io-port.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'io-port',
      translatorType: 4,
      target: '^https?://www\.zentralblatt-math\.org/ioport/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'g',
      lastUpdated: '2014-03-08 16:26:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
