
// Convert Object to an Array
const keysArray = Object.keys(obj);
console.log(keysArray); 
// Output: ["name", "age", "city"]
const valuesArray = Object.values(obj);
console.log(valuesArray);
// Output: ["Akash", 25, "Bhopal"]


// Convert Object to an Array
const object = { name: "Akash", age: 25, city: "Bhopal" };
const entriesArray = Object.entries(obj);
console.log(entriesArray); 
// Output: [["name", "Akash"], ["age", 25], ["city", "Bhopal"]]
