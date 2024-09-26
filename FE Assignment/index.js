
/// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.


function contains(obj, value) {
    // Check if the current object itself is the value we are looking for
    if (obj === value) {
        return true;
    }

    // If the current object is an actual object (not a primitive type)
    if (typeof obj === 'object' && obj !== null) {
        // Iterate over all properties of the object
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // Recursively call the contains function on each property
                if (contains(obj[key], value)) {
                    return true;
                }
            }
        }
    }

    // If the value was not found in the current object or any of its children
    return false;
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
};

let hasIt = contains(nestedObject, 44); // true
console.log(hasIt); 

let hasFoo2 = contains(nestedObject, 'foo2'); // true
console.log(hasFoo2);


let doesntHaveIt = contains(nestedObject, "foo"); // false
  console.log(doesntHaveIt);