///  2. How do you check if a string is a palindrome in JavaScript?

function isPalindrome(str) {
  // Convert to lowercase and remove any non-alphanumeric characters (optional)
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

// Example:
const input = "A man, a plan, a canal, Panama";
const result = isPalindrome(input);
console.log(result); // Output: true
