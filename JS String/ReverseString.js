///1. How do you reverse a string in JavaScript?

function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example:
const input = "hello";
const result = reverseString(input);
console.log(result); // Output: "olleh"
