## Insertion Sort

Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. Each iteration removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.
```
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    for (let j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
  return arr;
}

// console.log(insertionSort(arr));
```

![InsertionSort Visualization](https://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif)
