// Translator: Dataverse
// Target: ^https?://(www\.)?((open|research-?|hei|planetary-|osna|in|bonn|borealis|lida\.|archaeology\.|entrepot\.recherche\.|archive\.|redape\.)?(data|e?da[td]os)|dvn|sodha\.be|repositorio(\.|dedados|pesquisas)|abacus\.library\.ubc\.ca|dorel\.univ-lorraine\.fr|darus\.uni-stuttgart\.de|dunas\.ua\.pt|edmond\.mpdl\.mpg\.de|keen\.zih\.tu-dresden\.de|rdr\.kuleuven\.be|portal\.odissei\.nl)
// TODO: Implement Dataverse translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dataverse.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Dataverse',
      translatorType: 4,
      target: '^https?://(www\.)?((open|research-?|hei|planetary-|osna|in|bonn|borealis|lida\.|archaeology\.|entrepot\.recherche\.|archive\.|redape\.)?(data|e?da[td]os)|dvn|sodha\.be|repositorio(\.|dedados|pesquisas)|abacus\.library\.ubc\.ca|dorel\.univ-lorraine\.fr|darus\.uni-stuttgart\.de|dunas\.ua\.pt|edmond\.mpdl\.mpg\.de|keen\.zih\.tu-dresden\.de|rdr\.kuleuven\.be|portal\.odissei\.nl)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-05-01 12:09:04',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
