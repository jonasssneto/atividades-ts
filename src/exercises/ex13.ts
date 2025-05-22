interface Veiculo {
  acelerar(): void;
  frear(): void;
}

export class Carro implements Veiculo {


  acelerar() {
    console.log('O carro está acelerando...');
  }

  frear() {
    console.log('O carro está freando...');
  }
}