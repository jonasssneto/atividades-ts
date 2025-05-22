import * as readline from 'readline/promises';
import { question } from '../utils/question';

export const sum = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let a: number;
  let b: number;

  // usamos o while para caso não seja um numero valido retornar para as opções
  while (true) {
    // pergunta para o usuario os valores
    const aInput = await question(rl, 'Digite um número: ');
    const bInput = await question(rl, 'Digite outro número: ');

    a = parseInt(aInput);
    b = parseInt(bInput);

    // validamos se oq foi digitado é realmente um número
    if (isNaN(a) || isNaN(b)) {
      console.log('Por favor, digite números válidos.\n');
    } else {
      // sai do loop se ambos forem válidos
      break;
    }
  }

  console.log(`A soma é: ${a + b}`);
  rl.close();
};
