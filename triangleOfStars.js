// Given a positive integer n print a triangle of stars as in the example below

// Input: n = 5
// Output:
// *
// **
// ***
// ****
// *****
// Explanation: Print 5 lines, on ith line print i stars.

const n = 10;

const printStars = (n) => {
    // Create new variable to hold empty string
    let str = "";
    //Loop over n
    for (let i = 0; i < n; i++) {
        //Append a start to string for every loop
        str += "*";
        console.log(str)
    }
}

console.log(printStars(n));