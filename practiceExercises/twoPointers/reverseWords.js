function reverseWords(sentence) {
  let words = sentence.split(' ');
  return words.map(reverseWord).join(' ');
}

function reverseWord(word) {
  let letters = word.split('');
  let start = 0;
  let end = word.length - 1;
  while (start < end) {
    [letters[start], letters[end]] = [letters[end], letters[start]];
    start++;
    end--;
  }

  return letters.join('');
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");
