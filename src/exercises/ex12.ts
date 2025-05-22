export class _Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  exibirDados() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
  }
}

export class Aluno extends _Pessoa {
  matricula: string;

  constructor(nome: string, idade: number, matricula: string) {
    super(nome, idade);
    this.matricula = matricula;
  }

  exibirDados() {
    // exibe da classe pai
    super.exibirDados();
    console.log(`Matrícula: ${this.matricula}`);
  }
}

const aluno = new Aluno('Jonas', 20, '439053');
aluno.exibirDados();
