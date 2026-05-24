// Translator: NYTimes.com
// Target: ^https?://(query\.nytimes\.com/(search|gst)/|(select\.|www\.|mobile\.|[^\/.]*\.blogs\.)?nytimes\.com/)
// TODO: Implement NYTimes.com translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-nytimes-com.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'NYTimes.com',
      translatorType: 4,
      target: '^https?://(query\.nytimes\.com/(search|gst)/|(select\.|www\.|mobile\.|[^\/.]*\.blogs\.)?nytimes\.com/)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-01-22 19:34:13',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
