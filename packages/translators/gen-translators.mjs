import { glob } from 'glob';
import fs from 'fs';

console.log('Generating translators index...');

const dirname = `src/translators`;
glob(`./${dirname}/translators-*.ts`).then(files => {
  let imports = files.map((file, idx) => `import t${idx}, {functions as t${idx}_functions} from '${file.replace(dirname, '.')}';`);
  const exports = files.map((file, idx) => `['${file.replace(`${dirname}/`, '').replace('.ts', '')}']: { default: t${idx}, functions: t${idx}_functions }`).join(',\n  ');
  const str = `${imports.join('\n')}\n\nexport default {${exports}};`;

  fs.writeFileSync(`${dirname}/index.ts`, str);
});
