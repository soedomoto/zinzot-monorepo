// Translator: Google Scholar
// Target: ^https?://scholar[-.]google[-.](com|cat|(com?[-.])?[a-z]{2})(\\.[^/]+)?/(scholar(_case)?\\?|citations\\?)
// TODO: Implement Google Scholar translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-google-scholar.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Google Scholar',
      target: '^https?://scholar[-.]google[-.](com|cat|(com?[-.])?[a-z]{2})(\\.[^/]+)?/(scholar(_case)?\\?|citations\\?)',
      minVersion: '1.0.0',
      maxVersion: '',
      priority: 100,
      inRepository: false,
      translatorType: 4, // web
      browserSupport: 'gcsibv',
      lastUpdated: '2024-06-01 00:00:00',
    }
  },
  getAnchors() {
    return Array.from(document.querySelectorAll('.gs_r[data-cid]'))
      .map(row => {
        const url = row.querySelector('.gs_rt a')?.getAttribute('href');

        const pdfLinkEl = row.querySelector('.gs_ggsd a');
        let pdfUrl = undefined;
        if (pdfLinkEl && pdfLinkEl.textContent.trim().startsWith('[PDF]')) {
          pdfUrl = pdfLinkEl.getAttribute('href');
        }

        return {
          anchor: row.querySelector('.gs_ggs'),
          url, pdfUrl,
        }
      });
  },
}
