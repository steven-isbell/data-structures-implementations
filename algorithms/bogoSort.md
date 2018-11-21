## Bogo Sort
BogoSort (also permutation sort, stupid sort, slowsort, shotgun sort or monkey sort) is a highly ineffective sorting function based on the generate and test paradigm. The function successively generates permutations of its input until it finds one that is sorted.

_note: It was designed primarily as a joke._
```
function bogoSort(arr) {
  function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
    return true;
  }

  function shuffle(arr) {
    let count = arr.length;
    let temp;
    let index;

    while (count > 0) {
      index = Math.floor(Math.random() * count);
      count--;

      temp = arr[count];
      arr[count] = arr[index];
      arr[index] = temp;
    }

    return arr;
  }

  function sort(arr) {
    let sorted = false;
    while (!sorted) {
      arr = shuffle(arr);
      sorted = isSorted(arr);
    }
    return arr;
  }

  return sort(arr);
}

// bogoSort(arr);
```
![BogoSort Visualization](https://upload.wikimedia.org/wikipedia/commons/7/7b/Bogo_sort_animation.gif)

