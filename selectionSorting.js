// Given an array of integers nums, sort it in ascending order using Selection Sort

// Input: nums = [3, 1, 3, 2, 5, 4]
// Output: [1, 2, 3, 3, 4, 5]

// Your algorithm should run in O(n^2) time and use O(1) extra space.
const nums = [3, 1, 3, 2, 5, 4]

const sort = (nums) => {
    //loop over array
    for ( let i = 0; i <= nums.length; i++) {
        // Loop over array again
        for (let j = i + 1; j <= nums.length; j++) {
            // compare both index if nums[i] is greater then nums[j] swap them
            if ( nums[i] > nums[j]) {
                // inside of array swap both indexes
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }
    //return nums array
    return nums;
}

console.log(sort(nums));