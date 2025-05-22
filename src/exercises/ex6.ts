import * as readline from 'readline/promises';
import { question } from '../utils/question';

export const readAndShowNumbers = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const numbers: number[] = [];

  while (numbers.length < 5) {
    const input = await question(rl, `Digite o ${numbers.length + 1} número: `);
    const num = parseInt(input);

    if (isNaN(num)) {
      console.log('Por favor, digite um número válido.\n');
    } else {
      numbers.push(num);
    }
  }

  console.log('\nNúmeros digitados:');
  numbers.forEach((n, i) => {
    console.log(`${i + 1} ${n}`);
  });

  rl.close();
};
