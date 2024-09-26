
/// JavaScript program to find the maximum number and minimum number in an array. 

function findMaxNumber(arr) { 

    return Math.max(...arr); 
  
  } 


  function findMinNumber(arr) { 

    return Math.min(...arr); 
  
  } 
  const arr = [2,4,7,8,41,72];
  
  console.log(findMaxNumber(arr));
  console.log(findMinNumber(arr));