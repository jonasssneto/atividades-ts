import * as readline from 'readline/promises';
import { question } from '../utils/question';

export const jogoAdivinhacao = async () => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const numeroSorteado = Math.floor(Math.random() * 100) + 1;
  let palpite: number;

  console.log('Tente adivinhar o número entre 1 e 100!');

  while (true) {
    const input = await question(rl, 'Seu palpite: ');
    palpite = parseInt(input);

    if (isNaN(palpite)) {
      console.log('Digite um número válido.');
      continue;
    }

    if (palpite === numeroSorteado) {
      console.log('Parabéns! Você acertou!');
      break;
    } else if (palpite < numeroSorteado) {
      console.log('Mais alto!');
    } else {
      console.log('Mais baixo!');
    }
  }

  rl.close();
};
