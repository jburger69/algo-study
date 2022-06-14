// Given an input array of integers, find the length of the longest subarray without reapeating integers.

// Input: nums = [2, 5, 6, 2, 3, 1, 5, 6]
// Output: 5
// Explanation: [5, 6, 2, 3, 1] or [6, 2, 3, 1, 5] are both valid and of maximum length 5

// your algorithm should run in O(n^3) time and use O(1) extra space.

const nums = [2, 5, 6, 2, 3, 1, 5, 6]

const longestSubarrayWithoutRepeating = () => {
    //Create variable to hold result
    let result = 0;
    // Loop over nums array
    for ( let i = 0; i < nums.length; i++) {
        for ( let j = i; j < nums.length; j++) {
            // check to see if nums already includes number
            if ( nums.slice(i, j).includes(nums[j])) {
                break;
            }
            result = Math.max(result, j - i + 1);
        }
    }
    return result;
}

console.log(longestSubarrayWithoutRepeating(nums));