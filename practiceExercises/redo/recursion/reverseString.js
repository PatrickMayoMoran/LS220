function reverseString(string) {
  if (string.length <= 1) return string;

  return reverseString(string.slice(1)) + string[0];
}

console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.
