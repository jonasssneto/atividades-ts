export const findBigger = async () => {
  const numbers: number[] = [20, 65, 39, 93, 12, 45, 78, 90, 23, 56];

  console.log('Números:', numbers.join(', '));

  let biggerNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggerNumber) {
      biggerNumber = numbers[i];
    }
  }

  console.log('O maior número é:', biggerNumber);
};
