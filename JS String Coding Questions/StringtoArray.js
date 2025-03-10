 // Convert String to Array

 // use the .split() method to convert a string to an array. The split() method splits a string into an array of substrings. You can specify the separator to use to split the string.

 const str = "Akash Babu Kushwah";
const arr = str.split(" "); // Splitting by space
const arr1 = str.split(""); // Splitting by character
console.log(arr);
// Output: ["Akash", "Babu", "Kushwah"]
console.log(arr1);
// Output: ["A", "k", "a", "s", "h", "B", "a", "b", "u", "K", "u", "s", "h"]

// Using Spread Operator (...) The spread operator (...) can be used to convert a string to an array.

const str1 = "Akash";
const arr2 = [...str1];
const arr3 = Array.from(str1);
console.log(arr3);
console.log(str1.split(""));
console.log(arr2);
// Output: ["A", "k", "a", "s", "h"]
