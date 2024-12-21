function isPalindrome(str) {
  let reverseStr = str.split("").reverse().join("");

  return str === reverseStr;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));


//// 2nd approach without method

function isPalindrome(str) {
  // Initialize pointers at the start and end of the string
  let left = 0;
  let right = str.length - 1;

  // Loop until the pointers meet in the middle
  while (left < right) {
    // Compare characters at the current pointers
    if (str[left] !== str[right]) {
      return false; // If they don't match, it's not a palindrome
    }
    // Move pointers towards the middle
    left++;
    right--;
  }

  return true; // All characters matched, so it's a palindrome
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
