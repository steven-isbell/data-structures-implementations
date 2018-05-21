// Quicksort is a divide and conquer algorithm.
// Quicksort first divides a large array into two smaller sub-arrays:
// the low elements and the high elements.
// Quicksort can then recursively sort the sub-arrays.

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const left = [];
  const right = [];
  const newArray = [];
  const pivot = arr.pop();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return newArray.concat(quickSort(left), pivot, quickSort(right));
}

// console.log(quickSort(arr));
