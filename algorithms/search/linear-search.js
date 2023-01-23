// Problem: Given an array of 'n' elements and a target element of 't', find the index of 't' in the
// array. Return -1 if the target element is not found.

// arr = [-5,2,10,4,6], t = 10  --> return 2
// arr = [-5,2,10,4,6], t = 6   --> return 4
// arr = [-5,2,10,4,6], t = 20  --> return -1

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const testArray = [-5, 2, 10, 4, 6];
console.log(linearSearch(testArray, 10)); // 2
console.log(linearSearch(testArray, 6)); // 4
console.log(linearSearch(testArray, 20)); // -1

// Big-O = O(n)
