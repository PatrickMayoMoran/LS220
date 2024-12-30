// Write a function `areMatched` that takes a string as an argument
// and returns true if all types of brackets (parentheses (),
// square brackets [], and curly braces {}) in the string are
// properly matched. For the brackets to be considered
// matched, every opening bracket must have a corresponding
// closing bracket of the same type, and the brackets must be
// correctly nested.

/*
GOAL: return true or false if string contains correctly matched brackets

INPUT: string
OUTPUT: boolean

RULES:
  Empty string return true

DATA STRUCTURES
  Array as a stack
  object for matching opening and closing as key-value pairs

ALGORITHM
  initialize brackets with keys of open and values of closed
  initialize matchingStack to empty array
  iterate through our string
    if character is a key of brackets, add to stack
    if character is a value of brackets, 
      pop off and save from stack
      if character doesn't match the value for the key of what was popped off,
        return false

  return true
*/
function areMatched(string) {
  const brackets = {
    "(":")",
    "[":"]",
    "{":"}",
  };
  const matchingStack = [];

  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if (Object.keys(brackets).includes(character)) {
      matchingStack.push(character);
    } else {
      let popped = matchingStack.pop();
      return character === brackets[popped];
    }
  }

  return matchingStack.length === 0;
}

console.log(areMatched("()"));              // Output: true
console.log(areMatched("([()]{})"));        // Output: true
console.log(areMatched("([((}]({}))"));     // Output: false
console.log(areMatched("{{[[(())]]}}"));    // Output: true
console.log(areMatched(""));                // Output: true
console.log(areMatched("([)]"));            // Output: false
console.log(areMatched("(((("));              // Output: false
