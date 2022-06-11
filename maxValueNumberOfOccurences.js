// Given an array of integers, return the maximum value and its number of occurences.

// Input: nums = [2, 7, 11, 8, 11, 8, 3, 11]
// Output: [11, 3]
// Explanation: The maximum value is 11 and it appears 3 times

// Your algorithm should run in O(n) time and use O(1) space.

nums = [2, 7, 11, 8, 11, 8, 3, 11, 12, 13, 14, 14, 14, 14, 15, 16, 16, 16]

const maxValNumOfOccurences = (nums) => {
    //Create variables to keep track of maxVal and count
    let maxVal = nums[0];
    let count = 0;
    // For loop to loop over the nums array
    for (let val of nums) {
        // Check to see if the val is greater then maxVal
        if ( val > maxVal) {
            // if val is greater then set new maxVal to the current val in nums array
            maxVal = val;
            // update count to be 1
            count = 1;
        }
        // Else if val equals the maxVal already increase the count by one
        else if (val == maxVal) {
            count++;
        }
    }
    // return an array with the current maxVal and the count
    return [maxVal, count];
}

console.log(maxValNumOfOccurences(nums));