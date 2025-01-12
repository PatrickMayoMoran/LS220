// Write a function named findTruckCapacity that determines
// the optimal capacity for a delivery truck to transport
// a series of orders within a given number of trips.

// The function takes two parameters:
// 1. An array of positive integers orderVolumes, where each
// element represents the volume of an order in cubic meters.
// 2. A positive integer maxTrips, representing the maximum
// number of trips the truck can make.

// The truck must deliver orders in the sequence they appear
// in the orderVolumes array. On each trip, the truck is
// loaded with as many consecutive orders as possible without
// exceeding its capacity. The function should return the
// minimum truck capacity in cubic meters.

// Example:
// Input: orderVolumes = [6, 3, 8, 2, 5, 4, 5], maxTrips = 3
// Output: 14
// Explanation: A truck with 14 cubic meters capacity can
//              deliver all orders in 3 trips:
// Trip 1: 6 + 3 = 9 cubic meters
// Trip 2: 8 + 2 = 10 cubic meters
// Trip 3: 5 + 4 + 5 = 14 cubic meters

/*
  GOAL: Calculating the minimum capacity of a truck to enable it to carry
        all orders, in sequence, in the given number of trips

  INPUT: array, integer
  OUTPUT: integer

  RULES:
    orders must be loaded sequentially
    smallest possible capacity
    must be in number of trips listed or fewer
    Input: 
      Valid values?
      No input?
      Extra arguments?

    Size of biggest load is minimum possible capacity
      start at minimum possible capacity
      make it through the array in trips or fewer groupings
      if I can't?

    What's the binary search component?
      smallest capacity is somewhere between (or including)
      biggest single element
      sum of all the elements
*/
function findTruckCapacity(orderVolumes, maxTrips) {
  let biggestLoad = Math.max(...orderVolumes);
  let totalLoad = orderVolumes.reduce((acc, v) => acc + v);
  if (maxTrips === orderVolumes.length) return biggestLoad;
  if (maxTrips === 1) return totalLoad;

  let left = biggestLoad;
  let right = totalLoad;
  let smallestCapacity = biggestLoad;

  while (left <= right) {
    let capacity = Math.floor((left + right) / 2);
    let tripsNeeded = testCapacity(capacity, orderVolumes, maxTrips);
    if (tripsNeeded <= maxTrips) {
      smallestCapacity = capacity;
      right = capacity - 1;
    } else {
      left = capacity + 1;
    }
  }

  return smallestCapacity;
}

function testCapacity(capacity, volumes, trips) {
  let tripsNeeded = 1;

  let cumulativeLoad = 0;
  for (let i = 0; i++; i < volumes.length) {
    cumulativeLoad += volumes[i];
    if (cumulativeLoad > capacity) {
      tripsNeeded++;
      cumulativeLoad = volumes[i];
    }
  }

  return tripsNeeded;
}

console.log(findTruckCapacity([6, 3, 8, 2, 5, 4, 7], 3) === 15);
console.log(findTruckCapacity([3, 2, 5, 8, 4], 3) === 10);
console.log(findTruckCapacity([1, 2, 3, 4, 5], 1) === 15);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 5) === 50);
console.log(findTruckCapacity([5, 5, 5, 5, 5], 2) === 15);
console.log(findTruckCapacity([7, 3, 9, 4, 2, 8, 6], 2) === 20);
console.log(findTruckCapacity([100], 1) === 100);
console.log(findTruckCapacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3) === 4);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 2) === 90);
console.log(findTruckCapacity([50, 40, 30, 20, 10], 3) === 60);
console.log(findTruckCapacity([5, 10, 15, 20, 25], 1) === 75);
console.log(findTruckCapacity([3, 2, 4, 1, 5], 10) === 5);
console.log(findTruckCapacity([1000, 1000, 1000, 1000], 3) === 2000);
