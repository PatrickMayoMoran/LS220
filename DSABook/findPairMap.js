let test = [4, -5, 3, 15, 5];

function findPairs(array) {
  let numMap = new Map();
  let targetNumber = 10;

  for (let i = 0; i < array.length; i += 1) {
    console.log(i, ':');
    let complement = targetNumber - array[i];

    if (numMap.has(complement)) {
      return [complement, array[i]];
    }

      numMap.set(array[i], i);
  }

  return null;
}

console.log(findPairs(test));
