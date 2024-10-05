////Remove Duplicate Elements from JavaScript Array

////Using JavaScript filter() Method

let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
const array = [1, 2, 3, 4, 2, 3, 5];
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(array));

///Using JavaScript set() Method

let arr1 = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates(arr));

////Using JavaScript forEach() Method

let arr2 = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
  let unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}
console.log(removeDuplicates(arr));

////Using JavaScript reduce() Method

let arr3 = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
  let unique = arr.reduce(function (acc, curr) {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
  return unique;
}
console.log(removeDuplicates(arr));

////Using JavaScript indexOf() Method

let arr4 = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
  let unique = [];
  for (i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(removeDuplicates(arr));
