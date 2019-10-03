## Bubble Sort


Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.

```javascript
function bubbleSort(arr) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// console.log(bubbleSort([5, 657, 7, 5, 546, 2345, 553, 3, 0, 1, 45]));
```

![BubbleSort Visualization](https://upload.wikimedia.org/wikipedia/commons/0/06/Bubble-sort.gif)
