// Write a function that sorts the array using the bubbleSort method.

let array = [23, 4, 34, 66, 5, 1, 7, 60, 95, 82]

function bubbleSort(array) {
    for (let i = array.length; i > 0; i--) {
          for (let j = 0; j < i - 1; j++) {
              console.log(array, array[i], array[j])
              if (array[j] > array[j + 1]) {
                  let temp = array[j];
                  array[j] = array[j + 1]
                  array[j + 1] = temp;
                }
            }
            console.log("First pass through")
        }
    return array;
}

console.log(bubbleSort(array));