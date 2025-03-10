const a = [1,2,5,3,7,4]

function arrayOperation(a){
const b = [];

for(let i = 0;i <a.length;i++){
    if(i === 0 || a[i] > a[i - 1])
        b.push(a[i]);
}
   return b;
}
console.log(arrayOperation(a));