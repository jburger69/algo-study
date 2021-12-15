
// Write a function that takes in an array of integers and returns a sorted version of that array.
// Use the insertion Sort algorithm to sort the array.

const array = [40, 3, 4, 6, 11, 43, 66, 34, 5, 2, 62]

const insertionSort = (array) => {
    for(var i = 1; i < array.length; i++) {
		let currentVal = array[i];
		for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
			array[j + 1] = array[j];
		}
        // Without using var we wouldn't have access to what j is.
		array[j + 1] = currentVal;
		console.log(array)
	}
    console.log('finished')
	return array;
}

console.log(insertionSort(array))