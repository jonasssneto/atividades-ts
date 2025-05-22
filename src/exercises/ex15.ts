import * as readline from 'readline/promises';
import { question } from '../utils/question';

export const calcularIMC = async () => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const pesoInput = await question(rl, 'Digite seu peso (kg): ');
  const alturaInput = await question(rl, 'Digite sua altura (m): ');

  const peso = parseFloat(pesoInput);
  const altura = parseFloat(alturaInput);

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    console.log('Entrada inválida para peso ou altura.');
    rl.close();
    return;
  }

  const imc = peso / (altura * altura);

  console.log(`IMC: ${imc.toFixed(2)}`);

  rl.close();
};
