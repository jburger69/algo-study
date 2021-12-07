// Write a function which accepts a sorted array,
// and counts the unique values in the array. Array will always be sorted.
// time complexity = O(n) Space complexity = O(n)

const arr = [1,1,1,2,2,3,4,5,5,5,6,7];

function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    console.log( i + 1)
    return i + 1;
}

countUniqueValues(arr)
//            i
// [1,2,3,4,6,7,4,5,5,5,6,7]
//                        j