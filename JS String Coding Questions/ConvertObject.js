 // Convert Object to a String

// Given an object, convert the object to a string. The object is a key-value pair.

const obj = { name: "Akash", age: 25, city: "Bhopal" };
const str = JSON.stringify(obj);

console.log(str); 
// Output: '{"name":"Akash","age":25,"city":"Bhopal"}'

// Convert String to an Object
// Given a JSON string, convert the string to an object. The object is a key-value pair.
const jsonString = '{"name":"Akash","age":25,"city":"Bhopal"}';
const parsedObj = JSON.parse(jsonString); // Convert JSON string to object

console.log(parsedObj.name); // Output: Akash
console.log(parsedObj.age);  // Output: 25
console.log(parsedObj.city); // Output: Bhopal
console.log(parsedObj);      // Output: { name: 'Akash', age: 25, city: 'Bhopal' }
