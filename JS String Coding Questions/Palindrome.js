///  2. How do you check if a string is a palindrome in JavaScript?
// You can check if a string is a palindrome in JavaScript by comparing the original string with its reversed version. Here's how you can do it:
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

// Alternative approach
// You can also check if a string is a palindrome using two pointers. Here's how you can do it:
function isPalindromeAlternative(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Example:
const inputAlt = "A man, a plan, a canal, Panama";
const resultAlt = isPalindromeAlternative(inputAlt);
console.log(resultAlt); // Output: true