import * as readline from 'readline/promises';
import { question } from '../utils/question';

export const tabuada = async () => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  let num: number;

  while (true) {
    const input = await question(rl, 'Digite um número inteiro: ');
    num = parseInt(input);
    if (!isNaN(num)) break;
    console.log('Por favor, digite um número inteiro válido.\n');
  }

  console.log(`Tabuada do ${num}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }

  rl.close();
};
