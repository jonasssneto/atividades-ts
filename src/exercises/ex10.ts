export const sort = async () => {
  const numbers: number[] = [34, 12, 5, 77, 23, 9, 56, 1];

  console.log('Array original:', numbers.join(', '));

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }

  console.log('Array ordenado:', numbers.join(', '));
};
