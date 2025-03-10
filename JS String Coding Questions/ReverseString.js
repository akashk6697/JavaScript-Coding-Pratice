///1. How do you reverse a string in JavaScript?
// You can reverse a string in JavaScript using the built-in methods. Here's how you can do it:
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example:
const input = "hello";
const result = reverseString(input);
console.log(result); // Output: "olleh"

// Using a loop
// You can also reverse a string using a loop. Here's how you can do it:
function reverseStringUsingLoop(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Example:
const input2 = "world";
const result2 = reverseStringUsingLoop(input2);
console.log(result2); // Output: "dlrow"