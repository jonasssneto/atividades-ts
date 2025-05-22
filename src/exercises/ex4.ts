import * as readline from 'readline/promises';
import { question } from '../utils/question';

export const convertTemperature = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let celsius: number;

  while (true) {
    const input = await question(rl, 'Digite a temperatura em graus Celsius: ');
    celsius = parseFloat(input);

    if (isNaN(celsius)) {
      console.log('Por favor, digite um número válido.\n');
    } else {
      break;
    }
  }

  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}F`);

  rl.close();
};
