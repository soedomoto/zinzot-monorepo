// Translator: DBLP Computer Science Bibliography
// Target: ^https?://(www\.)?(dblp\d?(\.org|\.uni-trier\.de/|\.dagstuhl\.de/))
// TODO: Implement DBLP Computer Science Bibliography translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dblp-computer-science-bibliography.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'DBLP Computer Science Bibliography',
      translatorType: 4,
      target: '^https?://(www\.)?(dblp\d?(\.org|\.uni-trier\.de/|\.dagstuhl\.de/))',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-04-20 13:37:43',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
