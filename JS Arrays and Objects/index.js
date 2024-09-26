
/// Array Manipulation
//// Array Destructuring
/// Object Destructuring
////rest operators
/// spread operators

  const arr = [1,2,3,4,5];
   console.log(arr);
//  console.log(arr.splice(0,1));
// map method
const doubled = arr.map(item => item * 2);
console.log(doubled);
 
/// filter method

const evens = arr.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

//// reduce method

const sum = arr.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10


