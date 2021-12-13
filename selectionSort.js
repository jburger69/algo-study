// Write a function that takes in an array and sort the array using selectionSort.

// time O(n^2)
// space O(n)


let array = [1, 23, 45, 66, 2, 44, 3, 5, 10, 11]

function selectionSort(array) {
    let startIdx = 0;
      while (startIdx < array.length - 1) {
          let smallestIdx = startIdx;
          for (let i = startIdx + 1; i < array.length; i++) {
              if (array[smallestIdx] > array[i]) smallestIdx = i;
            }
          swap(startIdx, smallestIdx, array);
          startIdx++;
        }
    return array;
}
  
function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

console.log(selectionSort(array))