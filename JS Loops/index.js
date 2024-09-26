
//// (1) forEach() vs map() method 

//// The forEach() method is primarily used for iterating over array elements 
//   and executing a provided function once for each array element.
//    It doesn’t create a new array and doesn’t return anything. 
//    It’s mainly used when you want to perform an operation on each element of the array
//     without creating a modified version of the array.

const numbers = [1, 2, 3, 4];
 
 numbers.forEach((number) => {
  console.log(number * 2);
});

// JavaScript map()
// the map() method is also used for iterating over array elements, 
// but its main purpose is to create a new array by applying a provided 
// function to each element of the original array. It returns a new array 
// with the results of applying the function to each element.

const numbers2 = [1, 2, 3, 4];
 
const doubledNumbers = numbers2.map((number) => {
  return number * 2;
});
 
console.log(doubledNumbers);

// (2) Map(),filter() and reduce()

    const evenNumbers = numbers2.filter((number) => {
      return number % 2 == 0 });
      console.log(evenNumbers);
     
      /// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

      const sum = numbers2.reduce((acc,number)=> { 
        return acc + number;
      },0);
          console.log(sum);
// (3) call(),bind and apply()

/// program to check leap year
  var year = 2024;
  if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log(year, "it is a leap year");
  }
  else{
    console.log(year,"it is not a leap year");
  }