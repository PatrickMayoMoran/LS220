/*
  Imagine you're a pet owner wanting to give treats to your pets. Each pet has a specific appetite level represented by an array appetite[i], which is the minimum size of a treat the pet will be happy with. Each treat has a size represented by an array treats[j]. A pet will be satisfied if the size of the treat treats[j] is greater than or equal to its appetite level appetite[i]. Your goal is to maximize the number of satisfied pets and output the number of satisfied pets in the end.

  GOAL: return the max number of pets that get a treat they're satisfied with

  INPUT: two arrays of integers
  OUTPUT: integer (num of satisfied pets)

  RULES QUESTIONS EXAMPLES
    INPUT
      Always get two arrays of valid integers? Yes
      Could either array be empty? Yes, return 0
      Any other numeric values? No
      Any additional arguments? No
      Can I sort the arrays with built in sort? yes

  DSA
    if pets or treats are empty, return 0

    initialize satisfied at 0
    two pointers, treats and peets at 0
    sort each pets and treats
    
    while treats is less than the length of treats
      currentTreat at treats index
      currentPet at pet index
      if currentTreat greater than or equal to the pet
        increment satisfied
        slide treats forward
        slide pets forward
      else
        slide treats forward

    return satisfied
*/
function assignTreats(pets, treats) {
    if (pets.length === 0 || treats.length === 0) return 0;

    let satisfied = 0;
    let pet = 0;
    let treat = 0;
    pets.sort((a,b) => a - b);
    treats.sort((a,b) => a - b);

    while (treat < treats.length) {
      let currentTreat = treats[treat];
      let currentPet = pets[pet];
      if (currentTreat >= currentPet) {
        satisfied++;
        treat++;
        pet++;
      } else {
        treat++;
      }
    }

    return satisfied;
}

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);

// All test cases should log true
