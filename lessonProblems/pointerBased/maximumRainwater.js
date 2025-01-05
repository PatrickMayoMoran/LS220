// Imagine a series of vertical barriers arranged in a straight
// line at equal distances across a flat field.
// These barriers have different heights. After a rainstorm,
// water collects between the barriers, forming reservoirs.
// Your task is to determine the maximum volume of rainwater
// that can be captured between any two barriers,
// without the water spilling over any of the tops.

// Write a function `maxRainwater` that takes an array of
// barrier `heights` and calculates the maximum volume
// of rainwater that can be harvested between any two barriers.

// The array `heights` represents the height of each barrier,
// where `heights[i]` is the height of the i-th barrier.
// The distance between each barrier is uniform.

// The input array will contain at least 2 values.

// Example:
// Input: [1, 2, 1]
// Output: 2
// Explanation: The distance between the first and
// third barrier is 2, and the height is 1, so
// the maximum amount of rainfall is 2 * 1 = 2

//   |    =>    |
// |_|_|      |*|*|

// Example:
// Input: [2, 3, 4, 2]
// Output: 6
// Explanation: The distance between the first and
// fourth barrier is 3, and the height is 2, so the
// maximum amount of rainfall is 3 * 2 = 6

//     |            |
//   | |    =>    | |
// | | | |      |*|*|*|
// |_|_|_|      |*|*|*|

/*
GOAL: return the max volume of water between any two barriers with no spillage
      ie barrier height used to calculate volume will be the lowest in the span

INPUT: array of integers
OUTPUT: integer

RULES:
  Always get an array of positive integers?
  No input?
  No barrier height?

ALGORITHM
  initialize maxVolume of 0
  starter pointer at 0
  end pointer at length - 1

  while my starter is less than end
    width is distance between end and starter
    lowestBarrier is minimum from that subarray
    volume is width times lowest barrier
    if volume is greater than max volume, reassign max volume
    if starter barrier is lower than the end,
      increase starter
    else if it's more than the end
      decrease the end
    otherwise
      increment and decrement start and end

  returning maxVolume
*/
function maxRainwater(barriers) {
  let maxVolume = 0;
  let start = 0;
  let end = barriers.length - 1;

  while (start < end) {
    let width = end - start;
    let height = Math.min(barriers[start], barriers[end]);
    let volume = width * height;
    maxVolume = volume > maxVolume ? volume : maxVolume;

    if (barriers[start] < barriers[end]) {
      start++;
    } else if (barriers[start] > barriers[end]) {
      end--;
    } else {
      start++;
      end--
    }
  }

  console.log(maxVolume);
  return maxVolume;
}

console.log(maxRainwater([1, 1]) === 1);
console.log(maxRainwater([1, 3]) === 1);
console.log(maxRainwater([1, 2, 1]) === 2);
console.log(maxRainwater([2, 3, 4, 2]) === 6);
console.log(maxRainwater([2, 2, 2, 2, 2]) === 8);
console.log(maxRainwater([2, 9, 5, 10, 5, 6]) === 24);
console.log(maxRainwater([5, 4, 3, 2, 9, 10, 3, 4, 5]) === 40);
console.log(maxRainwater([3, 1, 2, 5, 2, 4, 2, 5, 6, 1, 5, 3, 2, 3, 4, 1, 2]) === 44);
console.log(maxRainwater([2, 2, 13, 9, 1, 15, 2, 5, 9, 7, 5, 3, 6, 3, 4, 1, 4, 5]) === 75);

// All test cases should log true

