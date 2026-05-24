// Translator: Japan Times Online
// Target: ^https?://(www|search)\.japantimes\.co\.jp/(cgi-bin|gsearch|search-results|features|entertainment|sports|life|news|rss|\?)
// TODO: Implement Japan Times Online translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-japan-times-online.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Japan Times Online',
      translatorType: 4,
      target: '^https?://(www|search)\.japantimes\.co\.jp/(cgi-bin|gsearch|search-results|features|entertainment|sports|life|news|rss|\?)',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-11-01 18:46:38',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
