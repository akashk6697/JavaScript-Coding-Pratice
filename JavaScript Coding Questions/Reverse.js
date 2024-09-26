
let str = "Hello, World!";
let s = str.split("").reverse().join("");
console.log(s);


let arr = [1,2,3,4,5,6,6];

//let s = new Set();
let string = new Set(arr);
s.add(...arr);

for(let i =0;i<arr.length;i++){
  s.add(arr[i]);
}

console.log(s);