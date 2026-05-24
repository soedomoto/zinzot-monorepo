// Translator: News Corp Australia
// Target: ^https?://(www\.)?(news|theaustralian|couriermail|adelaidenow|heraldsun|dailytelegraph|goldcoastbulletin|themercury|dailymercury|ntnews|northshoretimes|geelongadvertiser|townsvillebulletin|cairnspost|themorningbulletin|gladstoneobserver|sunshinecoastdaily|qt|thechronicle)\.com\.au/
// TODO: Implement News Corp Australia translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-news-corp-australia.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'News Corp Australia',
      translatorType: 4,
      target: '^https?://(www\.)?(news|theaustralian|couriermail|adelaidenow|heraldsun|dailytelegraph|goldcoastbulletin|themercury|dailymercury|ntnews|northshoretimes|geelongadvertiser|townsvillebulletin|cairnspost|themorningbulletin|gladstoneobserver|sunshinecoastdaily|qt|thechronicle)\.com\.au/',
      minVersion: '1.0.0b3.r1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-07-14 10:46:05',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
