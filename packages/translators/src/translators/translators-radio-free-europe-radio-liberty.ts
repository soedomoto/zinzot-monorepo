// Translator: Radio Free Europe / Radio Liberty
// Target: ^https?://((www|gandhara)\.rferl\.org/|www\.azatliq\.org/|www\.azattyq\.org/|rus\.azattyq\.org/|da\.azadiradio\.com/|pa\.azadiradio\.com/|www\.azattyk\.org/|www\.ozodi\.org/|www\.ozodlik\.org/|www\.evropaelire\.org/|www\.slobodnaevropa\.org/|www\.makdenes\.org/|www\.iraqhurr\.org/|www\.radiofarda\.com/|www\.azatutyun\.am/|www\.azadliq\.org/|www\.svaboda\.org/|www\.svoboda\.org/|www\.tavisupleba\.org/|www\.azathabar\.com/|www\.svobodanews\.ru/|(romania|moldova)\.europalibera\.org/|www\.radiosvoboda\.org/)
// TODO: Implement Radio Free Europe / Radio Liberty translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-radio-free-europe-radio-liberty.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Radio Free Europe / Radio Liberty',
      translatorType: 4,
      target: '^https?://((www|gandhara)\.rferl\.org/|www\.azatliq\.org/|www\.azattyq\.org/|rus\.azattyq\.org/|da\.azadiradio\.com/|pa\.azadiradio\.com/|www\.azattyk\.org/|www\.ozodi\.org/|www\.ozodlik\.org/|www\.evropaelire\.org/|www\.slobodnaevropa\.org/|www\.makdenes\.org/|www\.iraqhurr\.org/|www\.radiofarda\.com/|www\.azatutyun\.am/|www\.azadliq\.org/|www\.svaboda\.org/|www\.svoboda\.org/|www\.tavisupleba\.org/|www\.azathabar\.com/|www\.svobodanews\.ru/|(romania|moldova)\.europalibera\.org/|www\.radiosvoboda\.org/)',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-02 00:12:35',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
