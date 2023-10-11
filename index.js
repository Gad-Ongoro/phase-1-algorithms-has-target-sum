function hasTargetSum(array, target) {
// Write your algorithm here
    for (let element = 0; element < array.length - 1; element++) { //O(n)
        for (let e2 = element + 1; e2 < array.length; e2++) { //O(n^2)
            if (array[element] + array[e2] === target) {
                return true;
        } 
        }
    }
    return false; //O(1)
}

/* 
Write the Big O time complexity of your function here

O(n^2) where n represents the number of elements
*/

/* 
Add your pseudocode here
~ use for loops to iterate over the array
    for every element of the array; - outer loop iterates over the array
        for every element2 of the array - inner loop iterates over the array from the current outer loop element
            use an if comparison to compare the sum of array[element] + array[e2] to the target using strict equality
                if a matching pair is found, return true
                else false
*/

/*
Add written explanation of your solution here
We use for loops to iterate over the array
for every element of the array; - outer loop iterates over the array
for every element2 of the array - inner loop iterates over the array from the current outer loop element
use an if comparison to compare the sum of array[element] + array[e2] to the target using strict equality
if a matching pair is found, return true
else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
// add your own custom tests in here
console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([10, 20, 30, 40, 50, 60], 100));
}

module.exports = hasTargetSum;
