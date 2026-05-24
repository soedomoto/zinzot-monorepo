import tseslint from 'typescript-eslint';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: true,
    },
  },
});
