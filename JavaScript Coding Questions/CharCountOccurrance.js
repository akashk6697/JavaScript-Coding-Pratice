

function countCharOccurrences(str) {
    let occurrences = {};
    for (let char of str) {
      occurrences[char] = (occurrences[char] || 0) + 1;
    }
    return occurrences;
  }
  
  console.log(countCharOccurrences("hello world")); 
  // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
  