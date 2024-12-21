//// JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 


function filterEvenNumbers(numbers) { 

    return numbers.filter(num => num % 2 === 0); 
  
  }

  const numbers = [4,7,2,8,10,6,3];
    console.log(filterEvenNumbers(numbers));
