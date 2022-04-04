// Print Powers

// Given two non-negative integers A and B, print to the console all numbers less than or equal to B that are powers of A

// Powers of a number are: A0, A1, A2, etc.

// An = A multiplied by itself n times

// A0 = 1
// A1 = A
// A2 = A * A
// A3 = A * A * A
// A4 = A * A * A * A

// Input: A = 3, B = 100

// Output:
// 1
// 3
// 9
// 27
// 81

// Explanation:
// 30 = 1
// 31 = 3
// 32 = 9
// 33 = 27
// 34 = 81

A = 3;
B = 100;

function printPowers(A, B) {
    // Write the first step below:
    let power = 1;
    while ( power <= B ) {
        console.log(power)
        power *= A;
    };
};

console.log(printPowers(A,B));

