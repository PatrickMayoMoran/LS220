// You're keeping score for a futuristic game called "Nexus Surge."
// In this game, players accumulate points in unusual ways. At the
// start of each round, you begin with an empty scoreboard.

// You receive a sequence of scoring actions as an array of strings.
// Each action in the sequence is one of the following:

//  -  An integer x:
//      - Add a new score of x points to the scoreboard.
//  - '+':
//      - Add a new score that is the sum of the two most recent scores.
//  - '*':
//      - Add a new score that is double the most recent score.
//  - '-':
//      - Remove the most recent score from the scoreboard.

// Create a function `nexusSurge` that calculates and returns the sum
//  of all scores on the scoreboard after applying all the given actions.

// The input will be an array of valid operations.

// For operation "+", there will always be at least two previous scores on the record.
// For operations "*" and "-", there will always be at least one previous score on the record.

// Example 1:

// Input: actions = ["7","3","-","*","+"]
// Output: 42
// Explanation:
// "7" - Add 7 to the scoreboard, scoreboard is now [7].
// "3" - Add 3 to the scoreboard, scoreboard is now [7, 3].
// "-" - Remove the previous score, scoreboard is now [7].
// "*" - Add 2 * 7 = 14 to the scoreboard, scoreboard is now [7, 14].
// "+" - Add 7 + 14 = 21 to the scoreboard, scoreboard is now [7, 14, 21].
// The total sum is 7 + 14 + 21 = 42.

// Example 2:

// Input: actions = ["8","-3","6","-","*","12","+","+"]
// Output: 35
// Explanation:
// "8" - Add 8 to the scoreboard, scoreboard is now [8].
// "-3" - Add -3 to the scoreboard, scoreboard is now [8, -3].
// "6" - Add 6 to the scoreboard, scoreboard is now [8, -3, 6].
// "-" - Remove the previous score, scoreboard is now [8, -3].
// "*" - Add 2 * -3 = -6 to the scoreboard, scoreboard is now [8, -3, -6].
// "12" - Add 12 to the scoreboard, scoreboard is now [8, -3, -6, 12].
// "+" - Add -6 + 12 = 6 to the scoreboard, scoreboard is now [8, -3, -6, 12, 6].
// "+" - Add 12 + 6 = 18 to the scoreboard, scoreboard is now [8, -3, -6, 12, 6, 18].
// The total sum is 8 + (-3) + (-6) + 12 + 6 + 18 = 35.

// Example 3:

// Input: actions = ["4","-"]
// Output: 0
// Explanation:
// "4" - Add 4 to the scoreboard, scoreboard is now [4].
// "-" - Remove the previous score, scoreboard is now [].
// Since the scoreboard is empty, the total sum is 0.

/*
GOAL: Given an array of game actions, calculate the total of the scoreboard 
      at the ned

INPUT: array
OUTPUT: integer

RULES:
  Single Array argument? Yes
  Only valid game actions
  Any other number values? No, just positive and negative integers
  All elements of array are strings

  What gets added to the scoreboard?
    integer: add it
    *: add double the previous number
    +: add the previous two summed together
    -: remove topmost score

DATA STRUCTURES:
  scoreboard as a stack

ALGORITHM
  create an empty scoreboard stack
  create a match for the actions
  iterate through every element of the actions
    if element is a match for one of the three actions,
      perform that action
        addition of previous two
        removal of top
        add double the top
    otherwise, 
      add the integer version to the board

  return the sum of all the numbers on the scoreboard
*/
function nexusSurge(actions) {
  const scoreboard = [];
  let valid = /^[-+*]{1}$/;

  for (let i = 0; i < actions.length; i++) {
    let action = actions[i];
    if (valid.test(action)) {
      if (action === '-') {
        scoreboard.pop();
      } else if (action === '*') {
        let newNumber = scoreboard[scoreboard.length - 1] * 2;
        scoreboard.push(newNumber);
      } else {
        let lastNumber = scoreboard.pop();
        let secondLast = scoreboard[scoreboard.length - 1];
        let sum = lastNumber + secondLast;
        scoreboard.push(lastNumber);
        scoreboard.push(sum);
      }
    } else {
      scoreboard.push(parseInt(action));
    }
  }

  return scoreboard.reduce((acc, v) => acc + v, 0);
}


console.log(nexusSurge(["3", "4", "+"]) === 14);
console.log(nexusSurge(["5", "-", "-2"]) === -2);
console.log(nexusSurge(["1", "-", "-3", "*"]) === -9);
console.log(nexusSurge(["5", "-2", "+", "-", "7", "*"]) === 24);
console.log(nexusSurge(["-3", "-", "4", "8", "+", "*"]) === 48);
console.log(nexusSurge(["1", "-2", "3", "-", "+", "-"]) === -1);
console.log(nexusSurge(["-10", "*", "-", "5", "+", "7"]) === -3);
console.log(nexusSurge(["6", "-", "-8", "*", "2", "+"]) === -36);
console.log(nexusSurge(["1", "-", "2", "*", "+", "-10", "-", "*"]) === 24);
// All test cases should log true.
