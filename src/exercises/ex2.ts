import * as readline from 'readline/promises';
import { question } from '../utils/question';

export const isOdd = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let number: number;

  // usamos o while para caso não seja um numero valido retornar para as opções
  while (true) {
    // pergunta para o usuario os valores
    const numberInput = await question(rl, 'Digite um número: ');

    number = parseInt(numberInput);

    if (isNaN(number)) {
      console.log('Por favor, digite números válidos.\n');
    } else {
      // sai do loop se ambos forem válidos
      break;
    }
  }

  const isOdd: boolean = number % 2 === 0

  console.log(`O número ${number} é ${isOdd ? 'par' : 'ímpar'}.`);
  rl.close();
};
