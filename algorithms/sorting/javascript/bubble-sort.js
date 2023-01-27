/*
Problem: Given an array of integers, sort the array
 */

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const testArray = [8, 20, -2, 4, -6]; // [ -6, -2, 4, 8, 20 ]
bubbleSort(testArray);
console.log(testArray);

// Big-O = O(n^2)
