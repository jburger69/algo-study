// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input will have at most one solution, and you may not use the same index twice.

// In case no solution exists, return [-1, -1]

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 2 + 7 = 9

// For this lesson, your algorithm should run in O(n^2) time and use O(1) extra space.

const nums = [2, 7, 11, 15];
const target = 9;

const twoSum = (nums, target) => {
    // Loop over nums array
    for ( let i = 0; i <= nums.length; i++) {
        //Loop over nums array again with second loop but start at i + 1
        for ( let j = i + 1; j <= nums.length; j++) {
            //Check to see if nums i and nums j add up to equal the target
            if ( nums[i] + nums[j] == target) {
                //If they do equal target return an array with i and j
                return [i, j];
            }
        }
    }
    //No valid solution then return -1, -1 in array
    return [-1, -1]
}

console.log(twoSum(nums, target));