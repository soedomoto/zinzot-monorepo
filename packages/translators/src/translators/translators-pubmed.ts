// Translator: PubMed
// Target: ^https?://([^/]+\.)?(www|preview)\.ncbi\.nlm\.nih\.gov[^/]*/(m/)?(books|pubmed|labs/pubmed|myncbi|sites/pubmed|sites/entrez|entrez/query\.fcgi\?.*db=PubMed|myncbi/browse/collection/?|myncbi/collections/)|^https?://pubmed\.ncbi\.nlm\.nih\.gov/(\d|\?|searches/|clipboard|collections/)
// TODO: Implement PubMed translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-pubmed.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'PubMed',
      translatorType: 12,
      target: '^https?://([^/]+\.)?(www|preview)\.ncbi\.nlm\.nih\.gov[^/]*/(m/)?(books|pubmed|labs/pubmed|myncbi|sites/pubmed|sites/entrez|entrez/query\.fcgi\?.*db=PubMed|myncbi/browse/collection/?|myncbi/collections/)|^https?://pubmed\.ncbi\.nlm\.nih\.gov/(\d|\?|searches/|clipboard|collections/)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-01-10 14:01:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
