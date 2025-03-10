//// Missing Number in Javascript 


function findMissingNumber(arr) {
    const n = arr.length + 1; // n is the expected length if no numbers were missing
    const totalSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n
    const arraySum = arr.reduce((sum, num) => sum + num, 0); // Sum of elements in the array
  
    return totalSum - arraySum; // The difference is the missing number
  }
  
  const arr = [1, 2, 4, 5, 6]; // 3 is missing
  console.log(findMissingNumber(arr)); // Output: 3
  