//// 10. Replace all occurrences of a substring

function replaceAllOccurrences(str, search, replacement) {
  return str.split(search).join(replacement);
}

// Example:
console.log(replaceAllOccurrences("hello world", "l", "x")); // Output: "hexxo worxd"
