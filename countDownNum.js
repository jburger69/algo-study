// Recursion

const countDownNum = (num) => {
    if (num <= 0) {
        console.log("All Done");
        return;
    }
    console.log(num);
    num--;
    countDownNum(num);
}

countDownNum(4);

// print 4
// countDownNum(3)
// print 3
// countDownNum(2)
// print 2
// countDownNum(1)
// print 1
// countDownNum(0)
// print "All Done"

const sumRange = (num) => {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(4));

// 4 + sumRange(3)
// 3 + sumRange(2)
// 2 + sumRange(1)
// 1 hits base case so return 1

// 2 + 1 = 3 // down the call stack
// 3 + 3 = 6 // second level call stack
// 4 + 6 = 10 // first level call stack