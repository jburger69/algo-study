// Given a non-negative integer n return the factorial of n, also denoted as n!

// n! = 1 * 2 * 3 * ... * (n - 1) * n

// O(n) time complex

n = 5

function factorial(n) {
    let fact = 1;
    for ( let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(n));