//Q1:Implement a function to check if two arrays are equal.

//// Solution 1: With Array Methods

function areArraysEqual(arr1, arr2) {
    // Check if arrays have the same length
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // Check each element for equality
    return arr1.every((value, index) => value === arr2[index]);
  }
  
  const array1 = [1, 2, 3, 4];
  const array2 = [1, 2, 3, 4];
  const array3 = [1, 2, 3, 5];
  
  console.log(areArraysEqual(array1, array2)); // Output: true
  console.log(areArraysEqual(array1, array3)); // Output: false

  /// Solution 2: Without Array Methods

  function areArraysEqualWithoutMethods(arr1, arr2) {
    // Check if arrays have the same length
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // Loop through each element and compare
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false; // Return false if any element doesn't match
      }
    }
  
    return true; // Arrays are equal if all elements match
  }
  
  console.log(areArraysEqualWithoutMethods(array1, array2)); // Output: true
  console.log(areArraysEqualWithoutMethods(array1, array3)); // Output: false
  