import translators from "./translators";
import type { DoWebResultType, TranslatorFunctionsType } from "./types";

export * from "./utils";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function defineUnlistedScript(callback: () => void) {
  // callback();
}

export { translators, type DoWebResultType, type TranslatorFunctionsType };
