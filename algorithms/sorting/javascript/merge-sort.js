/*
Problem: Given an array of integers, sort the array
 */

function mergeSort(arr) {
  // base case
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      // use shift since element should be removed from left array
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}

const testArray = [8, 20, -2, 4, -6];
console.log(mergeSort(testArray)); // [ -6, -2, 4, 8, 20 ]

// Big-O = O(n log n)
