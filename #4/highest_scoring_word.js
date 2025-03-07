function high(x) {
  let maxScore = 0;
  let highestWordSum = "";

  const eachWord = x.split(" ");

  for (const word of eachWord) {
    let score = 0;

    for (const char of word) {
      score += char.charCodeAt(0) - 96;
    }

    if (score > maxScore) {
      maxScore = score;
      highestWordSum = word;
    }
  }

  return highestWordSum;
}

console.log(high("man i need a taxi up to ubud")); // taxi (54)
console.log(high("what time are we climbing up the volcano")); // volcano (82)