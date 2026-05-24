// Translator: Newsnet/Tamedia
// Target: ^https?://((www\.)?(tagesanzeiger|(bo\.)?bernerzeitung|bazonline|derbund|lematin|24heures|landbote|zuonline|zsz|tdg|letemps)\.ch/.)
// TODO: Implement Newsnet/Tamedia translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-newsnet-tamedia.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Newsnet/Tamedia',
      translatorType: 4,
      target: '^https?://((www\.)?(tagesanzeiger|(bo\.)?bernerzeitung|bazonline|derbund|lematin|24heures|landbote|zuonline|zsz|tdg|letemps)\.ch/.)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-04-29 11:03:04',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
