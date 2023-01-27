function LIS(arr) {
  let lis = new Array(arr.length);
  lis.fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }

  return Math.max(...lis);
}

console.log(LIS([3, 4, 2, 1, 5, 6])); // Output: 3 (LIS is [2, 5, 6])

/*
This implementation uses a bottom-up approach to solve the LIS problem.
It first initializes an array lis with the same length as the input array
and fills it with 1s. This array will be used to store the LIS of each
element in the input array.

It then uses two nested loops to iterate through the input array, with
the outer loop starting at index 1 and the inner loop starting at index 0.
For each element in the input array, the inner loop checks if the current
element is greater than the element at index j, and if so, updates the
lis[i] with the maximum value of lis[j] + 1.

After the nested loops finish, it returns the maximum value in the lis
array which is the length of the LIS.

The time complexity of this algorithm is O(n^2) as we have two nested
loops that iterate through the input array.

*/

/*
---- Why fill the array with 1s? ----

We fill the array with 1s because in the problem of finding the Longest
Increasing Subsequence, the minimum length of a subsequence is 1. This
means that every element in the input array can be considered as a
subsequence of length 1. Therefore, if we fill the array with 1s, we are
assuming that every element in the input array is a valid subsequence of
length 1.

The array lis is used to store the length of the LIS of each element
in the input array. By initializing it with 1s, we are assuming that
the LIS of each element is 1, which is the minimum possible value.
Then, as we iterate through the input array and find a longer increasing
subsequence for a particular element, we update the corresponding element
in the lis array with the new, longer length.

It's also worth noting that if we don't fill the array with 1s, the
initial value of each element in the array will be undefined and that
would cause an error when trying to find the max value of the array,
as we are trying to compare undefined and numbers.
 */
