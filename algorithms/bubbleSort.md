## Bubble Sort


Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.
```
function bubbleSort(arr) {
  let swapped = false;
  let count = 1;
  do {
    for (let i = 0; i < arr.length - count; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      } else {
        swapped = false;
      }
    }
    count++;
  } while (swapped);
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// console.log(bubbleSort(arr));
```

![BubbleSort Visualization](https://upload.wikimedia.org/wikipedia/commons/0/06/Bubble-sort.gif)
