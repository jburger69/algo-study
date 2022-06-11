// Given a sorted array of integers nums, find the smallest index where we can place a given value such that the array remains sorted

// Input: nums = [1, 2, 3, 5, 7], value = 4
// Output: 3
// Explanation: Placing the value 4 on the 4th index we obtain nums = [1, 2, 3, 4, 5, 7]


// Input: nums = [1, 2, 3], value = 2
// Output: 1
// Explanation: Placing the value 2 on the 1st index we obtain nums = [1, 2, 2, 3]

// Your algorithm should run in O(n) time and use O(1) extra space.

nums = [1, 2, 3];
value = 2

const lowerBound = (nums, value) => {
    // For Loop through nums array.
    for ( let i = 0; i <= nums.length; i++) {
        //Check if nums is greater then value
        if ( nums[i] >= value ) {
            // If nums[i] is greater then value then return i
            return i;
        }
    }
    // return nums.length
    return nums.length
}

console.log(lowerBound(nums, value));