
///  Find the first non-repeating character


function firstNonRepeatingChar(str) {
    const charCount = {};
  
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
    return null;
  }
  
  // Example:
  console.log(firstNonRepeatingChar("aabbccdde")); // Output: e
  console.log(firstNonRepeatingChar("aabcc")); // Output: "b"
  
/// 2nd approach

function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
          return str[i];
        }
      }
    
      return null;  // If no non-repeating character is found
    }
  // Example:
  console.log(firstNonRepeatingChar("aabbccdde")); // Output: e
  console.log(firstNonRepeatingChar("aabcc")); // Output: "b"


  
///  Find the first repeating character

/// 1st approach
function firstRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return str[i];
        }
      }
    }
  
    return null;  // If no repeating character is found
  }
  
  // Example:
  console.log(firstRepeatingCharacter("hello")); // Output: "l"
  console.log(firstRepeatingCharacter("abcd"));  // Output: null
  

  /// 2nd approach

  function firstRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
        return str[i];
      }
    }
  
    return null;  // If no repeating character is found
  }
  
  // Example:
  console.log(firstRepeatingCharacter("hello")); // Output: "l"
  console.log(firstRepeatingCharacter("abcd"));  // Output: null
  