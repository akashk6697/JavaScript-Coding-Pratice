let str = "Hello, World!";
let s = str.split("").reverse().join("");
console.log(s);

let arr = [1, 2, 3, 4, 5, 6, 6];
function reverse(arr){
  let start = 0;
  let end = arr.length - 1;
  while(start <=end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
  
  start++;
  end--;

}

return arr;
}
  console.log(reverse(arr));
//// 2nd approach

let array = [1, 2, 3, 4];

let revArray = [];

console.log("Original Array: ");
console.log(array);

for (let i = array.length - 1; i >= 0; i--) {
      revArray.push(array[i]);
     }

console.log("Reversed Array: ");
console.log(revArray);
