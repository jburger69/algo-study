A1 = 1, B1 = 6, A2 = 3, B2 = 8

function intersect(A1, B1, A2, B2) {
    if ( B1 < A2 || B2 < A1 ) {
        console.log(false)
        return false;
    } else {
        console.log(true)
        return true;
    };
};

intersect(A1, B1, A2, B2)

function intersect(A1, B1, A2, B2) {
    console.log(B1 < A2 || B2 < A1  ? false : true );
};

intersect(A1, B1, A2, B2)