// Given a non-negative integer N check if it is a prime number

// Prime numbers are positive numbers greater than 1 that are only divisible by the number 1 or itself.

// Examples of prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23

// Input: N = 31
// Output: true

// Input: N = 6
// Output: false
// Explanation: 6 is divisible by 2 and 3.

// O(n) - time
// O(1) - space

const isPrime = (n) => {
    if ( n < 2 ) {
        return false;
    }
    for ( let d = 2; d < n; d++) {
        if ( n % d == 0 ) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(5))
console.log(isPrime(10))