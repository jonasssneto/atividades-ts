import * as readline from 'readline/promises';
import { question } from '../utils/question';

export const validarSenha = async () => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const senha = await question(rl, 'Digite uma senha: ');

  const tem8Caracteres = senha.length >= 8;
  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);
  const temNumero = /[0-9]/.test(senha);

  if (!tem8Caracteres) {
    console.log('A senha deve ter pelo menos 8 caracteres.');
  } else if (!temMaiuscula) {
    console.log('A senha deve conter pelo menos uma letra maiúscula.');
  } else if (!temMinuscula) {
    console.log('A senha deve conter pelo menos uma letra minúscula.');
  } else if (!temNumero) {
    console.log('A senha deve conter pelo menos um número.');
  } else {
    console.log('Senha válida!');
  }

  rl.close();
};
