/*
  You're given an array, chars, of lowercase English letters sorted in ascending order, and a lowercase letter, key. Your task is to find the smallest letter in chars that is lexicographically greater than key. If no such letter exists, return the first letter in chars.

GOAL: return a letter from chars that is the "smallest" letter 
      still "greater" than our key
INPUT: array and a string
OUTPUT: single string

RULES, EXAMPLES, QUESTIONS
  Always get two arguments? Yes
  First argument always a sorted array of lowercase letters? Yes
  Array empty? Yes, return key;
  Key - always single lowercase letter? Yes
  No empty key? no

  "smallest" means earliest in the alphabet
  "greater" means later in the alphabet
  "smallest" letter still "greater" than the key
  If no such letter found, return the first letter in chars

DATA STRUCTURES
  use given array

ALGORITHM
  if array length is zero, return the key
  if array length is one, return that letter
  Binary Search

  initialize smallestFound to first letter in characters
  initialize left to 0
  initialize right to array length minus 1
  as long as left is less than or equal to right
    Repeatedly check the middle of our collection,
    if letter is greater than our target, 
      store it in smallestFound
      reassign right to mid - 1 (remove right half of collection, only bigger letters)
    otherwise
      left reassigned to mid + 1

  return smallestFound
  
*/

function findNextLetter(chars, key) {
  if (chars.length === 0) return key;
  if (chars.length === 1) return chars[0];

  let left = 0;
  let right = chars.length - 1;
  let smallestFound = chars[0];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (chars[mid] > key) {
      smallestFound = chars[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return smallestFound;
}

console.log(findNextLetter(['z'], 'a') === 'z');
console.log(findNextLetter([], 'a') === 'a');
console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
// All test cases should log true.
