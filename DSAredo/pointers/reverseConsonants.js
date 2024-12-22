// Given a string `str`, reverse all the consonants in the string and return it.
// Consonants are all alphabetic characters except for the vowels `'a'`, `'e'`, `'i'`,
// `'o'`, and `'u'`, which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.
function reverseConsonants(string) {
  let vowels = /[aeiou]/i;
  let start = 0;
  let end = string.length - 1;
  let chars = string.split('');

  while (start < end) {
    if (vowels.test(chars[start])) {
      start++;
    }

    if (vowels.test(chars[end])) {
      end--;
    }

    if (!vowels.test(chars[start]) && !vowels.test(chars[end])) {
      [chars[start], chars[end]] = [chars[end], chars[start]];
      start++;
      end--;
    }

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
