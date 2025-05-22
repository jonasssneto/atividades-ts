import * as readline from 'readline/promises';
import { question } from '../utils/question';

export const calculator = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let a: number;
  let b: number;
  let operator: string;

  while (true) {
    const aInput = await question(rl, 'Digite o primeiro número: ');
    const bInput = await question(rl, 'Digite o segundo número: ');
    const opInput = await question(rl, 'Digite a operação (+, -, *, /): ');

    a = parseFloat(aInput);
    b = parseFloat(bInput);
    operator = opInput.trim();

    const validOperators = ['+', '-', '*', '/'];

    if (isNaN(a) || isNaN(b) || !validOperators.includes(operator)) {
      console.log('\nEntrada inválida. Certifique-se de digitar dois números e uma operação válida (+, -, *, /).\n');
      continue;
    }

    if (operator === '/' && b === 0) {
      console.log('\nDivisão por zero não é permitida.\n');
      continue;
    }

    break;
  }

  let resultado: number = 0;

  switch (operator) {
    case '+':
      resultado = a + b;
      break;
    case '-':
      resultado = a - b;
      break;
    case '*':
      resultado = a * b;
      break;
    case '/':
      resultado = a / b;
      break;
    default:
      console.log('Operação inválida.');
      rl.close();
      return;
  }

  console.log(`\nResultado: ${a} ${operator} ${b} = ${resultado}`);
  rl.close();
};
