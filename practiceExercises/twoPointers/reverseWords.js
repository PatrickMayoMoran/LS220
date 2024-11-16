/*
ORIGINAL SOLUTION
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
*/

// ANCHOR RUNNER, but no anchor needed
function reverseWords(string) {
  let runner = 0;
  let reversed = '';

  while (runner < string.length) {
    let currentWord = '';
    while (runner < string.length && string[runner] !== ' ') {
      currentWord = string[runner] + currentWord;
      runner += 1;
    }

    reversed += currentWord;
    if (runner < string.length) {
      reversed += ' ';
      runner += 1;
    }
  }
  return reversed;
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");
