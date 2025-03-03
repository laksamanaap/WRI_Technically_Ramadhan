function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  let positives = 0;
  let negativeSum = 0;

  input.forEach((num) => {
    if (num > 0) positives++;
    if (num < 0) negativeSum += num;
  });

  return [positives, negativeSum];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); // [10, -65]
