///// 1st example

function Welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + " " + name);
  };
  return greetingInfo;
}
var myFunction = Welcome("John");
myFunction("Welcome "); //Output: Welcome John
myFunction("Hello Mr."); //output: Hello Mr. John

//// 2nd example
var sum = function (a) {
  console.log("Hello World " + a);
  var c = 4;
  return function (b) {
    return a + b + c;
  };
};

var store = sum(2);
console.log(store(5));
