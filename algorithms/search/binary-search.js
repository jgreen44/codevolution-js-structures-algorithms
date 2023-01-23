// Problem: Given a SORTED array of 'n' elements and a target element of 't', find the index of 't' in the
// array. Return -1 if the target element is not found.

// arr = [-5,2,4,6,10], t = 10  --> return 4
// arr = [-5,2,4,6,10], t = 6   --> return 3
// arr = [-5,2,4,6,10], t = 20  --> return -1

// Pseudocode:
// If array is empty, return -1
// If array has elements, find middle element
// If target = middle element, return middle element index
// if target < middle element, binary search left half of the array
// if target > middle element, binary search right half of the array

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

const testArray = [-5, 2, 4, 6, 10];

console.log(binarySearch(testArray, 10)); // 4
console.log(binarySearch(testArray, 6)); // 3
console.log(binarySearch(testArray, 20)); // -1

// Big-O = O(log n)
