// Given an array of integers, return a new array containing only the unique values.

// The resulting array can be in any order.

// Input: [2, 3, 1, 1, 4, 3, -2, 1]
// Output: [2, 3, 1, 4, -2]

// your algorithm should run in O(n^2) time and use O(n) extra space.

const nums = [2, 3, 1, 1, 4, 3, -2, 1]

const removeDuplicates = (nums) => {
    // Create new array to store unique values
    let uniqueValues = [];
    // Loop over nums
    for ( let value of nums) {
        // check if uniquevalues array already contains value if not push value to array
        if (!uniqueValues.includes(value)) {
            uniqueValues.push(value);
        }
    }
    //return uniqueValues array
    return uniqueValues;
}

console.log(removeDuplicates(nums));