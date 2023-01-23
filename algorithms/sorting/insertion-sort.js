/*
Problem: Given an array of integers, sort the array
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const testArray = [8, 20, -2, 4, -6];
insertionSort(testArray);
console.log(testArray); // [ -6, -2, 4, 8, 20 ]
// Big-O = O(n^2)
