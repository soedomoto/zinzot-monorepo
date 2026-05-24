// Translator: Theory of Computing
// Target: ^https?://(theoryofcomputing\.org|toc\.cse\.iitk\.ac\.in|www\.cims\.nyu\.edu/~regev/toc|toc\.ilab\.sztaki\.hu|toc\.nada\.kth\.se|tocmirror\.cs\.tau\.ac\.il)/articles/[vg].*(/|html?)$
// TODO: Implement Theory of Computing translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-theory-of-computing.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Theory of Computing',
      translatorType: 4,
      target: '^https?://(theoryofcomputing\.org|toc\.cse\.iitk\.ac\.in|www\.cims\.nyu\.edu/~regev/toc|toc\.ilab\.sztaki\.hu|toc\.nada\.kth\.se|tocmirror\.cs\.tau\.ac\.il)/articles/[vg].*(/|html?)$',
      minVersion: '1.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcv',
      lastUpdated: '2019-06-10 22:52:50',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
