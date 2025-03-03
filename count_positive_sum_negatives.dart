List<int> countPositivesSumNegatives(List<int>? input) {
  if (input == null || input.isEmpty) {
    return [];
  }

  int positiveCount = 0;
  int negativeSum = 0;

  for (int num in input) {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeSum += num;
    }
  }

  return [positiveCount, negativeSum];
}

void main() {
  print(
    countPositivesSumNegatives([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      -11,
      -12,
      -13,
      -14,
      -15,
    ]),
  ); // [10, -65]
  print(countPositivesSumNegatives([])); // []
  print(countPositivesSumNegatives(null)); // []
}
