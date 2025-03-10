// Remove duplicate characters from a string
// Given a string, remove any duplicate characters.
//
// Input: "Hello World"
// Output: "Helo Wrd"
// Approach:


function removeDuplicateCharacters(str) {
    // Create an empty object to store character frequencies.
    let charFrequency = {};
    // Initialize an empty string to store the result.
    let result = '';

    for (let char of str) {
        if (!charFrequency[char]) {
            charFrequency[char] = true;
            result += char;
        }
    }

    return result;
}

console.log(removeDuplicateCharacters("Hello World")); // Output: "Helo Wrd"