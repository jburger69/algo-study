
// 1
// An example of multiplying 2 numbers.

const multiplyTwoNumbers = (n1, n2) => { return n1 * n2 }
console.log(multiplyTwoNumbers(6,2));

// 2
// An example of a closure. It is a function that references bindings from local scopes around it.

const multiplier = (factor) => {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

// 3
// An example of recursion. Ex: Starting from number 1 and repeatedly either adding 5 or multiplying by 3.
// Ex: 13 could be reached by first multiplying by 3 then adding 5 twice.

const findSolution = (target) => {
    function find(current, history) {
        if ( current == target) {
            return history;
        } else if ( current > target ) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));

//4
// function exercises: Write a function min that takes in two args and returns the mininimum.

const min = (arg1, arg2) => {
    let mininimum = arg1;
    if ( mininimum > arg2) {
        mininimum = arg2;
    }
    return mininimum;
};

console.log(min(100, 20000));

//5
// Bean counter.

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
}
// recurvise call on countChar within countBs function.
function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("AAFFFFBBDDDDUUUNNNEBBSSJJJBSDBJSDFIIRBBC"));
console.log(countChar("sdgsdgsdkkrtythyhgbkakksdfkkdfgerlak", "k"));

 