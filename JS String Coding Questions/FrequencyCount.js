//count frequency of each character in a string and remove white spaces
function countFrequency1(str) {
    let freq = {};
    str = str.replace(/\s+/g, ''); // Remove white spaces
    for (let char of str) {
        if (freq[char]) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }
    return freq;
}

let result1 = countFrequency1("example string");
console.log("result",result1);

/// count frequency of each character in a string with white spaces
function countFrequency(str) {
    let freq = {};
    for (let char of str) {
        if (freq[char]) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }
    return freq;
}

let result = countFrequency("example string");
console.log(result);