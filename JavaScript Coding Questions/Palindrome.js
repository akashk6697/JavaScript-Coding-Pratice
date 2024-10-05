function isPalindrome(str) {
  let reverseStr = str.split("").reverse().join("");

  return str === reverseStr;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
