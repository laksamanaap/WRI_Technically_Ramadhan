function wordsToMarks(string){
  return [...string].reduce((sum,char) => sum + (char.charCodeAt(0) - 96),0);
}

console.log(wordsToMarks("love")) // 54
console.log(wordsToMarks("friendship")) // 54