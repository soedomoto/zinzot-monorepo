// Translator: Google Books
// Target: ^https?://(books|www)\.google\.[a-z]+(\.[a-z]+)?/(books(/.*)?\?(.*id=.*|.*q=.*)|search\?.*?(btnG=Search\+Books|tbm=bks)|books/edition/)|^https?://play\.google\.[a-z]+(\.[a-z]+)?/(store/)?(books|search\?.*c=books)
// TODO: Implement Google Books translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-google-books.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Google Books',
      translatorType: 4,
      target: '^https?://(books|www)\.google\.[a-z]+(\.[a-z]+)?/(books(/.*)?\?(.*id=.*|.*q=.*)|search\?.*?(btnG=Search\+Books|tbm=bks)|books/edition/)|^https?://play\.google\.[a-z]+(\.[a-z]+)?/(store/)?(books|search\?.*c=books)',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2021-10-12 18:13:54',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
