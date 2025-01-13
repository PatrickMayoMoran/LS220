/*
GOAL: given a string, return a new string with the letters in each word reversed
      but the words in the same order

INPUT: string
OUTPUT: string

RULES, EXAMPLES, TEST CASES
  Single string as input? Yes
  Empty String? Yes
  Only alphabet characters and spaces? Yes

  Case matters - don't change case of any letter
  Can't use array#reverse
DATA STRUCTURES
  arrays for words and potentially letters

ALGORITHM
  Helper functions i'd like?
    reverse single word

  Reverse a word
    split the word in to an array of characters
    have a start pointer at 0
    have an end pointer at length minus end
    while start is less than end
      swap letters at start/end index positions

    join and return letters

  if string length is 0 or 1, just return the string
  split the string into words
  transform each word into its reversed version
  join the collection of transformed words with spaces
  return that new string
*/

function reverseWords(string) {
  if (string.length <= 1) return string;
  let words = string.split(' ');

  return words.map(reverseWord).join(' ');
}

function reverseWord(word) {
  let characters = word.split('');
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    [characters[start], characters[end]] = [characters[end], characters[start]];
    start++;
    end--;
  }

  return characters.join('');
}
console.log(reverseWord("a"));
console.log(reverseWord("Mayo"));
console.log(reverseWord("moRnIng"));
console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");
