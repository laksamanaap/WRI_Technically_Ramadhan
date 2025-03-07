function toWeirdCase(string) {
  return string
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((char, index) => {
          return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}

console.log(toWeirdCase("This is a test case")); // ThIs Is A TeSt CaSe
