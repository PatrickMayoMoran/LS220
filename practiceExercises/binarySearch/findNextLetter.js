/*
  GOAL: return the smallest letter in the array that is "greater" than
        the target

  INPUT: array of letters, letter
  OUTPUT: letter

  ALGORITHM:
    initialize matched letter
    start at half of array length
    if letter is greater than target, eliminate right
      if letter is less than current letter, make it current;
    if letter is less than, eliminate left
      store letter in matched letter
      if current letter is less than match, it is new match
*/
function findNextLetter(letters, target) {
  let left = 0;
  let right = letters.length - 1;
  let nextLetter = letters[0];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currentLetter = letters[mid];
    if (currentLetter > target) {
      nextLetter = currentLetter;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return nextLetter;
}

console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
// All test cases should log true.
