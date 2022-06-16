// A magical number is obtained from a positive number by adding its digits repeatedly until we obtain one digit.

// Input: N = 39
// Output: 3
// Explanation: magicNumber(39) = magicNumber(3 + 9) = magicNumber(12) = magicNumber(1 + 2) = 3

// Input: N = 928435
// Output: 4
// Explanation: 9 + 2 + 8 + 4 + 3 + 5 = 31 => 3 + 1 = 4

const n = 5117

const digitSum = (n) => {
    let sum = 0;
    while ( n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}


const magicNumber = (n) => {
    while ( n > 9) {
        n = digitSum(n);
    }
    return n;
}

console.log(magicNumber(n));