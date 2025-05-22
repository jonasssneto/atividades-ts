import * as readline from 'readline/promises';
import { sum } from './exercises/ex1';
import { isOdd } from './exercises/ex2';
import { mean } from './exercises/ex3';
import { convertTemperature } from './exercises/ex4';
import { numbers } from './exercises/ex5';
import { readAndShowNumbers } from './exercises/ex6';
import { findBigger } from './exercises/ex7';
import { countVowels } from './exercises/ex8';
import { calculator } from './exercises/ex9';
import { sort } from './exercises/ex10';
import { tabuada } from './exercises/ex14';
import { calcularIMC } from './exercises/ex15';
import { validarSenha } from './exercises/ex16';
import { jogoAdivinhacao } from './exercises/ex17';
import { contarPalavras } from './exercises/ex18';
import { question } from './utils/question';
import { Pessoa } from './exercises/ex11';
import { Aluno } from './exercises/ex12';
import { Carro } from './exercises/ex13';

const menu = `
=== MENU DE EXERCÍCIOS ===
1 - Soma de dois números
2 - Verificar par ou ímpar
3 - Calcular média de três notas
4 - Converter Celsius para Fahrenheit
5 - Exibir números pares de 1 a 20
6 - Ler 5 números e armazenar em array
7 - Encontrar maior número em um array
8 - Contar vogais em uma string
9 - Calculadora simples
10 - Ordenar array em ordem crescente
11 - Classe Pessoa
12 - Classe Aluno
13 - Classe Carro
14 - Tabuada
15 - Calculadora de IMC
16 - Validar senha
17 - Jogo de adivinhação
18 - Contar palavras em uma string
0 - Sair
`;

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  while (true) {
    console.log(menu);
    const opt = await question(rl, 'Escolha uma opção (0-18): ');
    switch (opt.trim()) {
      case '1':
        await sum();
        break;
      case '2':
        await isOdd();
        break;
      case '3':
        await mean();
        break;
      case '4':
        await convertTemperature();
        break;
      case '5':
        await numbers();
        break;
      case '6':
        await readAndShowNumbers();
        break;
      case '7':
        await findBigger();
        break;
      case '8':
        await countVowels();
        break;
      case '9':
        await calculator();
        break;
      case '10':
        await sort();
        break;
      case '11':
        const pessoa = new Pessoa('João', 30);
        console.log(pessoa.toString ? pessoa.toString() : pessoa);
        break;
      case '12':
        const aluno = new Aluno('Maria', 20, '12345');
        console.log(aluno.toString ? aluno.toString() : aluno);
        break;
      case '13':
        const carro = new Carro();
        console.log(carro.acelerar());
        console.log(carro.frear());
        break;
      case '14':
        await tabuada();
        break;
      case '15':
        await calcularIMC();
        break;
      case '16':
        await validarSenha();
        break;
      case '17':
        await jogoAdivinhacao();
        break;
      case '18':
        await contarPalavras();
        break;
      case '0':
        rl.close();
        return;
      default:
        console.log('Opção inválida!\n');
    }
    await new Promise(res => setTimeout(res, 500));
  }
}

main();
