
//// sort an array in ascending order
//// without using inbuilt function

const sortArray= (arr)=>{
    return arr.sort((a,b)=> a - b); /// ascending a- b //// b -a descending 
};

console.log(sortArray([3,6,9,5,2]));
console.log(sortArray([3,6,9,5,10]));

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j].localeCompare(arr[j + 1]) > 0) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = ["apple", "orange", "banana", "grape", "pear"];
let sortedArr = bubbleSort(arr);

console.log(sortedArr);
