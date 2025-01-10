// Write a function `longestSubstringLength` that finds the
// length of the longest substring without duplicates in a
// given string. The function should take a string as input
// and return an integer representing the length of the longest
// substring without any repeating characters. The input
// string will only contain lowercase characters.

// Example:
// Input: s = "helloworld"
// Output: 5
// Explanation: The longest substring without repeating characters is "world",
// which has a length of 5.

/*
  Plain English Algorithm Overview
    Count letters as I go along 
    mark the letters as seen in my map
    once my runner is at a seen letter,
    save my length (map length? runner - anchor - 1?)
      if it's greater than starting length of 0?
    move my anchor until it's at the seen letter
      decrement length by one each time? 
      Delete each letter from map as I go?
    start anchor over at the next letter
      keep going?

*/
function longestSubstringLength(string) {
  let length = 0;
  let anchor = 0;
  let runner = 0;
  let seen = new Set();
  let currentLength = 0;

  while (runner < string.length) {
    while (!seen.has(string[runner]) && runner < string.length) {
      currentLength++;
      seen.add(string[runner]);
      runner++;
    }

    length = currentLength > length ? currentLength : length;

    while (string[anchor] !== string[runner]) {
      seen.delete(string[anchor]);
      currentLength--;
      anchor++;
    }

    seen.delete(string[anchor]);
    currentLength--;
    anchor++;
  }

  return length;
}

console.log(longestSubstringLength("a") === 1);
console.log(longestSubstringLength("aa") === 1);
console.log(longestSubstringLength("ab") === 2);
console.log(longestSubstringLength("abba") === 2);
console.log(longestSubstringLength("abc") === 3);
console.log(longestSubstringLength("helloworld") === 5);
console.log(longestSubstringLength("dvdf") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);
console.log(longestSubstringLength("thisishowwedoit") === 6);
console.log(longestSubstringLength("longestsubstring") === 8);
console.log(longestSubstringLength("aabbccddeffghijklmno") === 10);
console.log(longestSubstringLength("abcdefghijklmnopqrstuvwxyz") === 26);
