/////  (1) Normal Function
function myFunction(g1, g2) {
  return g1 / g2;
}
const value = myFunction(8, 2); // Calling the function
console.log(value);

//// (2) Arrow Function

const value1 = (g1, g2) => g1 * g2;
console.log(value1(3, 5));

///// (3) Generator Functions

// Generate Function generates three different numbers in three calls
function* fun() {
  yield 10;
  yield 20;
  yield 30;
}

// Calling the Generate Function
let gen = fun();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//// (4) Higher order function

function higherOrderFunc(a) {
  return function (b) {
    console.log(a * b);
  };
}
higherOrderFunc(3)(53);

//// (5) Anonymous Function

var greet = function () {
  console.log("Welcome to GeeksforGeeks!");
};

greet();
//// (6) async Function

const getData = async () => {
  let y = "Hello World";
  console.log(y);
};

console.log(1);
getData();
console.log(2);

//// (7) Curring Function

const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3)); // 6

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction(1)(2); // returns a function: c => 3 + c
curryUnaryFunction(1)(2)(3); // returns the number 6

//// (8) Pure Function

const multiply = (x, y) => x * y;
console.log(multiply(5, 3));

function calculateGST(productPrice) {
  return productPrice * 0.05;
}
console.log(calculateGST(15));

///// (9) first Class function

const handler = () => console.log("This is a click handler function");
document.addEventListener("click", handler);

///// (10) first order function

const firstOrder = () => console.log("I am a first order function!");
