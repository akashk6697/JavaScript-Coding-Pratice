//// Count element frequency in array

// let scores = [90,60,50,80,60,70,60,50,90,70,100,60];
// let names = ["Akash","Vikas","Arti","Prakash","Akash"];
// let nameCount = {};
// names.forEach(val => nameCount[val] = (nameCount[val] || 0) + 1);
// console.log(nameCount);
// let elementCount = {};
// scores.forEach(val=>elementCount[val] =(elementCount[val] || 0) + 1);

// console.log(elementCount);

// Array of scores
let scores = [90, 60, 50, 80, 60, 70, 60, 50, 90, 70, 100, 60];

// Array of names
let names = ["Akash", "Vikas", "Arti", "Prakash", "Akash"];

// Function to count the frequencies
function countFrequencies(arr) {
  let count = {};
  arr.forEach(val => {
    count[val] = (count[val] || 0) + 1;
  });
  return count;
}

// Function to sort the frequencies in descending order
function sortFrequencies(count) {
  return Object.entries(count).sort((a, b) => b[1] - a[1]);
}

// Count and sort the name frequencies
let nameCount = countFrequencies(names);
let sortedNameCount = sortFrequencies(nameCount);

// Count and sort the score frequencies
let elementCount = countFrequencies(scores);
let sortedElementCount = sortFrequencies(elementCount);

// Print the sorted results
console.log("Name Count (Descending Order):", sortedNameCount);
console.log("Element Count (Descending Order):", sortedElementCount);
