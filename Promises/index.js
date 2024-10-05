///JavaScript Promise is used to handle asynchronous operations JavaScript.
//   They are easy to manage when dealing with multiple asynchronous operations
//  where callbacks can create callback hell leading to unmanageable code.
//  Promises are the ideal choice for handling asynchronous operations in the simplest manner.
//  They can handle multiple asynchronous operations easily and provide better error handling
//   than callbacks and events.

const promise = new Promise((resolve, reject) => {
  isNameExist = true;
  if (isNameExist) {
    resolve("User name Exist");
  } else {
    reject("error");
  }
});
promise
  .then((result) => console.log(result))
  .catch(() => {
    console.log("error!");
  });

/// Promise Chaining
let promise1 = new Promise((resolve, reject) => {
  resolve("Hello JavaScript");
});

promise1
  .then(function (result1) {
    console.log(result1);
    return new Promise((resolve, reject) => {
      resolve("GFG is awesome");
    });
  })
  .then((result2) => {
    console.log(result2);
  });

//// Example

let myPromise = new Promise(function (resolve, reject) {
  // some code that takes time, like loading data
  let success = true; // change this to false to check error

  if (success) {
    resolve("The data has loaded successfully!");
  } else {
    reject("There was an error loading the data.");
  }
});
