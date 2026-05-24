// Translator: Journal of Machine Learning Research
// Target: ^https?://((www\.)?(jmlr\.(org|csail\.mit\.edu))/(papers/v|mloss/)|proceedings\.mlr\.press/v)
// TODO: Implement Journal of Machine Learning Research translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-journal-of-machine-learning-research.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Journal of Machine Learning Research',
      translatorType: 4,
      target: '^https?://((www\.)?(jmlr\.(org|csail\.mit\.edu))/(papers/v|mloss/)|proceedings\.mlr\.press/v)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-16 20:23:32',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
