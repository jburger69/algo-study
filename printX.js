// Given a positive integer n print matrix containing an X as in the example below

// Input: n = 5
// Output:
// x---x
// -x-x-
// --x--
// -x-x-
// x---x
// Explanation:
// Each line contains exactly n = 5 characters and two 'x's.
// Each diagonal contains 'x'

const n = 25;


const buildString = (n, firstX, secondX) => {
    let str = '';
    for ( let i = 0; i < n; i++) {
        if (i == firstX || i == secondX) {
            str += "x";
        } else {
            str += "-";
        }
    }
    return str;
}


const printX = () => {
    let firstX = 0;
    let secondX = n - 1;
    for ( let i = 0; i < n; i++) {
        let str = buildString(n, firstX, secondX);
        console.log(str);
        firstX++;
        secondX--;
    }
}

console.log(printX(n));