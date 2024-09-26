const findLargestString =(str)=>{
if(str.trim().length === 0){
    return false;
}
words = str.split(" ");

/// 1st method
// words = words.sort((a,b)=>b.length - a.length);
// console.log(words);
// return words[0];

/// 2nd method
return words.reduce((accum,currWord) =>(currWord.length>accum.length ? currWord:accum),
""
);
}

console.log(findLargestString("My name is Akash Babu Kushwah"));



const findLargestString2 = (str) => {
    if (str.trim().length === 0) {
        return false;
    }

    let words = str.split(" ");

    // Sort the words by length and return the first element
    words = words.sort((a, b) => b.length - a.length);
    return words[0];
};

// Example usage
console.log(findLargestString2("This is the first paragraph"));



function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longest = '';
  
    for (let word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  