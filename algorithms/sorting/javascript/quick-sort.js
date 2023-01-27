/*
Problem: Given an array of integers, sort the array

1. Pick pivot element (we use last) in array
2. Put everything that is smaller than pivot into 'left' array, if larger, then 'right' array
Ex:     element(s) > pivot --> right array
        element(s) < pivot --> left array

3. Repeat until array length 1
4. Repeatedly concatenate left array, pivot and right array until 1 sorted array remains
 */

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example 2:  Doesn't take up space

function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivot = partition(arr, left, right);
    quickSortInPlace(arr, left, pivot - 1);
    quickSortInPlace(arr, pivot + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, right);
  return i;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const testArray = [8, 20, -2, 4, -6];
console.log('Regular QuickSort', quickSort(testArray)); // [ -6, -2, 4, 8, 20 ]
console.log('In-Place QuickSort', quickSortInPlace(testArray)); // [ -6, -2, 4, 8, 20 ]
// Big-O:
// Worst Case: O(n^2) = array is already sorted, so have to sort against empty array
// Average (Typical) Case:
// Big-O = O(n log n)   --> recursively divide arrays = O(log n)
//                      --> for loop = O(n)
