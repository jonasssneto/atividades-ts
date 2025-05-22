import * as readline from 'readline/promises';
import { question } from '../utils/question';

export const mean = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let a: number;
  let b: number;
  let c: number;

  // usamos o while para caso não seja um numero valido retornar para as opções
  while (true) {
    // pergunta para o usuario os valores
    const aInput = await question(rl, 'Digite um número: ');
    const bInput = await question(rl, 'Digite um número: ');
    const cInput = await question(rl, 'Digite um número: ');

    a = parseFloat(aInput);
    b = parseFloat(bInput);
    c = parseFloat(cInput);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      console.log('Por favor, digite números válidos.\n');
    } else {
      // sai do loop se ambos forem válidos
      break;
    }
  }

  const median = (a + b + c) / 3;
  console.log(`A média é: ${median.toFixed(2)}`);
  rl.close();
};
