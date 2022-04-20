A = 7 
B = 3
C = 9

function secondLargest(A, B, C) {
    if (Math.min(B, C) <= A && A <= Math.max(B, C)) {
        return A;
    }
    if (Math.min(A, C) <= B && B <= Math.max(A, C)) {
        return B;
    }
    return C;
};

console.log(secondLargest(A, B, C));