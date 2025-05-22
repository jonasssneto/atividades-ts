import * as readline from 'readline/promises';
import { question } from '../utils/question';

export const contarPalavras = async () => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const texto = await question(rl, 'Digite uma frase ou texto: ');
  rl.close();

  const palavras = texto.trim().split(/\s+/).filter(Boolean);

  console.log(`Número de palavras: ${palavras.length}`);
};
