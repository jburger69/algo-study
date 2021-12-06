
const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]

// 0(n) time | O(1) space - where n is the length of the array.
function isValidSubsequence(array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;
      
    while (arrIdx < array.length && seqIdx < sequence.length) {
          if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
          arrIdx++;
    }
    return seqIdx === sequence.length;
}

isValidSubsequence(array, sequence)
console.log(isValidSubsequence(array, sequence))