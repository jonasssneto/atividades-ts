import { Interface } from 'readline/promises';

export const question = async (rl: Interface, prompt: string): Promise<string> => {
  return rl.question(prompt);
};
