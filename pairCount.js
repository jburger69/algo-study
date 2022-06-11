// Given two positive integers n and sum, count the number of different pairs of integers (x, y) such that 1 <= x, y <= n and x + y equals sum.

// Input: n = 7, sum = 6
// Output: 3
// Explanation: There are 3 valid pairs: (1, 5), (2, 4), (3, 3).

// Note that pairs such as (1, 5) and (5, 1) are not considered different.

// Your algorithm should run in O(n^2) time and use O(1) space.

const pairCount = (n, sum) => {
    // Result for keeping track of how many pairs were found.
    let result = 0;
    // for Loop threw till we reach n.
    for ( let i = 0; i <= n; i++) {
        //Second loop to loop over other number in pair.
        for ( let j = i; j <= n; j++) {
            //Check to see if i + j equals the sum.
            if ( i + j === sum) {
                // if the pair equals the sum then increment the result.
                result++
            }
        }
    }
    // Return result
    return result;
}

console.log(pairCount(7, 6));