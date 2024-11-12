// Given a string `str`, reverse only all the consonants in the string and return it.
// Consonants are all alphabetic characters except for the vowels `'a'`, `'e'`, `'i'`,
// `'o'`, and `'u'`, which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.

// naive approach
/*
function reverseConsonants(string) {
  let chars = string.split('');
  if (chars.length === 0) return string;
  let len = string.length;
  let consonant = /[^aeiou]/i;

  for (let i = 0; i < len; i++) {
    if (consonant.test(chars[i])) {
      for (let j = len - 1 - i; j > i; j--) {
        if (consonant.test(chars[j])) {
          [chars[j], chars[i]] = [chars[i], chars[j]];
          break;
        }
      }
    }
  }
  return chars.join('');
}
*/

// ORIGINAL optimized - start end pointer
/*
function reverseConsonants(string) {
  const len = string.length;
  if (len === 0) return string;

  let chars = string.split('');
  let start = 0;
  let end = len - 1;
  let consonants = /[^aeiou]/i;

  while (start < end) {
    if (consonants.test(chars[start])) {
      if (consonants.test(chars[end])) {
        [chars[start], chars[end]] = [chars[end], chars[start]];
        start ++;
        end --;
        continue;
      }
      end--;
      continue;
    }
    start++;
  }

  return chars.join('');
}
*/

// SOLUTION optimized
const isConsonant = (char) => {
  return 'bcdfghjklmnpqrstvwxyz'.includes(char.toLowerCase());
}

function reverseConsonants(string) {
  let chars = string.split('');
  let s = 0;
  let e = string.length - 1;

  while (s < e) {
    if (!isConsonant(chars[s])) {
      s++;
      continue;
    }
    if (!isConsonant(chars[e])) {
      e--;
      continue;
    }
    [chars[s], chars[e]] = [chars[e], chars[s]];
    s++;
    e--;
  }

  return chars.join('');
}

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true
