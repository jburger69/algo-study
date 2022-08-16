
const merge = (arr1, arr2) => {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }

    return results;
}

console.log(merge([2, 5, 6, 4, 1, 7], [3, 1, 9, 10, 11]))


const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([2, 5, 7, 1, 8, 4, 5, 7, 4, 2]))