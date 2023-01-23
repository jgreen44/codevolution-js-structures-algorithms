/*
Problem: Given two finite non-empty sets, find their Cartesian Product
Sets A & B: AxB = set of all ordered pairs (a, b), where 'a' is in A and 'b' is in B

const A = [1,2]
const B = [3,4]
AxB = [[1,3],[1,4],[2,3],[2,4]]

const C = [1,2]
const D = [3,4,5]
CxD = [[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]]
 */

function cartesianProduct(arr1, arr2) {
  const result = [];
  for (const element of arr1) {
    for (const item of arr2) {
      result.push(element, item);
    }
  }
  return result;
}

const setA = [1, 2];
const setB = [3, 4];

const setC = [1, 2];
const setD = [3, 4, 5];
console.log(cartesianProduct(setA, setB)); // [[1,3],[1,4],[2,3],[2,4]]
console.log(cartesianProduct(setC, setD)); // [[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]]

// Big-O = O(mn) --> mn depends on lengths of each array. If both are same size, then O(n^2)
