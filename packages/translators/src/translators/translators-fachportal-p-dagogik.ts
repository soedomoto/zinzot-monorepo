// Translator: Fachportal Pädagogik
// Target: ^https?://(www\.fachportal-paedagogik\.de/literatur/|www\.pedocs\.de/)
// TODO: Implement Fachportal Pädagogik translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-fachportal-p-dagogik.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Fachportal Pädagogik',
      translatorType: 4,
      target: '^https?://(www\.fachportal-paedagogik\.de/literatur/|www\.pedocs\.de/)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-10-14 07:01:47',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
