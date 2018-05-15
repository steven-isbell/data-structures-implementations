// Bubble sort, sometimes referred to as sinking sort,
// is a simple sorting algorithm that repeatedly steps through the list to be sorted,
// compares each pair of adjacent items and swaps them if they are in the wrong order.

function bubbleSort(arr) {
  let change = false;
  let count = 1;
  do {
    for (let i = 0; i < arr.length - count; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        change = true;
      } else {
        change = false;
      }
    }
    count++;
  } while (change);
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// console.log(bubbleSort(arr));
