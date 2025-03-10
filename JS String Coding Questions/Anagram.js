////(1) determines if two strings are anagrams of each other

function areAnagrams(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

const str1 = "Geeks";
const str2 = "eksGe";
console.log(areAnagrams(str1, str2));


//// without method 

function areAnagrams2(str1, str2) {
  // If lengths are different, they cannot be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  // Create an object to store character frequencies for str1
  let charCount = {};

  // Count characters in str1
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check characters in str2 against the charCount
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!charCount[char]) {
      return false; // If char not found or count is zero, not an anagram
    }
    charCount[char]--; // Decrease the count for matching character
  }

  // If all counts are zero, it's an anagram
  return true;
}

const str3 = "Geeks";
const str4 = "eksGe";
console.log(areAnagrams(str3, str4)); // Output: true
