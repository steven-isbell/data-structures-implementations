function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
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
}

// console.log(quickSort(arr));
