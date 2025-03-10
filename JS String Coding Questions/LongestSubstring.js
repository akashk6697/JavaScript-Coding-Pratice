///  Find the longest substring without repeating characters


function longestSubstringWithoutRepeating(str) {
    let start = 0, maxLength = 0, charIndex = {};
    
    for (let end = 0; end < str.length; end++) {
      if (charIndex[str[end]] >= start) {
        start = charIndex[str[end]] + 1;
      }
      charIndex[str[end]] = end;
      maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
  }
  
  // Example:
  console.log(longestSubstringWithoutRepeating("abcabcbb")); // Output: 3 ("abc")
  