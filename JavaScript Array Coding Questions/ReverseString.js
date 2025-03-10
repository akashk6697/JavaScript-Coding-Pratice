//// Reverse string without in-built method

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  console.log(reverseString("hello"));
  console.log(reverseString("Hello world"));

///// reverse without method

  function reverseWordsWithoutMethods(str) {
    let result = "";
    let word = "";
    
    // Traverse the string from end to start
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === " ") {
        // If we encounter a space, add the collected word to result and reset the word
        result = word + " " + result;
        word = "";
      } else {
        // Collect characters for the current word
        word = str[i] + word;
      }
    }
    
    // Add the last word (as it might not end with a space)
    result = word + (result ? " " : "") + result;
  
    return result;
  }
  
  console.log(reverseWordsWithoutMethods("My name is Akash")); // Output: "Akash is name My"

  //// reverse with method
  let str = "Hello, World!";
  let s = str.split("").reverse().join("");
  console.log(s);
  