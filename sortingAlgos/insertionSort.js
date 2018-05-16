function insertionSort(arr) {
  let i;
  let j;
  for (i = 0; i < arr.length; i++) {
    const value = arr[i];
    for (j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
  return arr;
}

console.log(insertionSort(arr));
