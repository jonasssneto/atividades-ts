import * as readline from 'readline/promises';
import { question } from '../utils/question';

export const countVowels = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input = await question(rl, 'Digite uma frase ou palavra: ');
  rl.close();

  const vogais = ['a', 'e', 'i', 'o', 'u'];
  let contador = 0;

  for (const letra of input.toLowerCase()) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  console.log(`Número de vogais: ${contador}`);
};
