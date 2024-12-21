
///  22. Count the number of vowels in a string


function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
  }
  
  // Example:
  console.log(countVowels("hello world")); // Output: 3
  