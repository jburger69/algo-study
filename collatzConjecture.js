// The Collatz conjecture in mathematics asks whether repeating two simple arithmetic operations will eventually transform every positive integer into one. It concerns sequences of integers in which each term is obtained from the previous term as follows:
// if the previous term is even, the next term is one half of the previous term.
// If the previous term is odd, the next term is 3 times the previous term plus 1.
// The conjecture is that these sequences always reach 1, no matter which positive integer is chosen to start the sequence.


// Input: n = 3

// Output:
// 3
// 10
// 5
// 16
// 8
// 4
// 2
// 1

// Explanation:
// n = 3  => n is odd  => n becomes 3 * 3 + 1 = 10
// n = 10 => n is even => n becomes 10 / 2    = 5
// n = 5  => n is odd  => n becomes 5 * 3 + 1 = 16
// n = 16 => n is even => n becomes 16 / 2    = 8
// n = 8  => n is even => n becomes 8 / 2     = 4
// n = 4  => n is even => n becomes 4 / 2     = 2
// n = 2  => n is even => n becomes 2 / 1     => 1
// n = 1 => stop

// n / 2 if n is even
// 3 * n + 1 if n is odd

n = 3;

function printSeries(n) {
    while ( n > 1 ) {
        if ( n % 2 == 0 ) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        console.log(n)
    }
}

console.log(printSeries(n));