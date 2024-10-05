//// determines if two strings are anagrams of each other

function areAnagrams(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

const str1 = "Geeks";
const str2 = "eksGe";
console.log(areAnagrams(str1, str2));
