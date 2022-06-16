// Given an odd positive integer n print a rhombus of stars as in the example below

// Input: n = 5
// Output:
//   *
//  ***
// *****
//  ***
//   *
// Explanation:
// Each line contains exactly n = 5 characters.
// 1st line contains two spaces, one * and two spaces.
// 2nd line contains one space, three * and one space
// 3rd line contains five stars
// 4th line contains one space, three * and one space
// 5th line contains two spaces, one * and two spaces

const n = 25

const buildString = (n, character) => {
    let str = '';
    for ( let i = 0; i < n; i++) {
        str += character;
    }
    return str;
}

const printRhombus = (n) => {
    let stars = 1;
    let spaces = Math.floor(n / 2);
    for ( let i = 0; i < n; i++) {
        let str = 
        buildString(spaces, ' ') +
        buildString(stars, '*') +
        buildString(spaces, ' ');
        console.log(str);
        if ( i < Math.floor(n / 2)) {
            stars += 2;
            spaces -= 1;
        } else {
            stars -= 2;
            spaces += 1;
        }
    }
}

console.log(printRhombus(n));