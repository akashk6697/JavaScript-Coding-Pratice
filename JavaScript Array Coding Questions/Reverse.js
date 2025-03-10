

let arr = [1, 2, 3, 4, 5, 6, 6];

//let s = new Set();
let string = new Set(arr);
string.add(...arr);

for (let i = 0; i < arr.length; i++) {
  string.add(arr[i]);
}

console.log(string);
