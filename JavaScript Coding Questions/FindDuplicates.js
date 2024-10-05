///// find duplicates in array
///// (1) Using filter() Method

const check_duplicate_in_array = (input_array) => {
  const duplicates = input_array.filter(
    (item, index) => input_array.indexOf(item) !== index
  );
  return Array.from(new Set(duplicates));
};
const arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate_in_array(arr));

/////(2) Using Sort() Method

let check_duplicate = (input_array) => {
  input_array = input_array.sort((a, b) => a - b);
  let duplicate_elements = [];
  for (index in input_array) {
    if (input_array[index] === input_array[index - 1]) {
      duplicate_elements.push(input_array[index]);
    }
  }
  console.log(duplicate_elements.length - 1);
  return [...new Set(duplicate_elements)];
};
let arr1 = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate(arr1));
