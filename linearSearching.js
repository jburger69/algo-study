// Given an array of integers nums, return the index of a given value.

// If the value doesn't exist, return -1.

// Input: nums = [1, 2, 4, 5], value = 4
// Output: 2
// Explanation: nums[2] is 4

// Your algorithm should run in O(n) time and use O(1) space.
const nums = [1, 2, 4, 4, 5];
const value = 4;


const findNumber = (nums, value) => {
    // For Loop through nums array
    for ( let i = 0; i <= nums.length; i++) {
        //Check if the position of nums[i] is equal to value.
        if ( nums[i] == value) {
            //If nums[i] equals value then return position of i.
            return i;
        }
    }
    // If value is not in nums array just return -1.
    return -1;
}

console.log(findNumber(nums,value));