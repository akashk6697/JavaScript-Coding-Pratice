
///// Write a function that sums squares of numbers in list that may contain more lists.

function SumSquares(list) {
    
    let sum = 0;

    // Iterate through each element in the list
    for (let item of list) {
        // If the item is a number, add its square to the sum
        if (typeof item === 'number') {
            sum += item * item;
        } 
        // If the item is a list (array), recursively calculate the sum of squares
        else if (Array.isArray(item)) {
            sum += SumSquares(item);
        }
    }

    return sum;
}

// Test cases
var l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
