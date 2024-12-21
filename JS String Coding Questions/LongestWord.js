function longestWord(str) {
    const words = str.split(' ');
    let longest = "";
  
    for (let word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  
  // Example:
  console.log(longestWord("I love programming")); // Output: "programming"
  