function hoppingChaos(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  let prev2 = 1;
  let prev1 = 2;

  for (let i = 3; i <= n; i++) {
    let temp = prev2 + prev1;
    prev2 = prev1;
    prev1 = temp;
  }

  return prev1;
}

console.log(hoppingChaos(7));
