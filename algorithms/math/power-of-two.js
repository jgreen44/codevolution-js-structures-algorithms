/*
Problem: Given a positive integer, 'n', determine if the number is a power of 2 or not.
An integer is a power of two if there exists an integer 'x' such that 'n' === 2^x

    isPowerOfTwo(1) = true (2^0)
    isPowerOfTwo(2) = true (2^1)
    isPowerOfTwo(5) = false

Pseudocode:
n = 8
8/2 = 4 (remainder 0)
4/2 = 2 (remainder 0)
2/2 = 1 (remainder 0)

if remainder is not 0 in any step, 'n' is not a power of 2
if remainder is 0 and 'n' comes down to 1, then 'n' is a power of 2
 */

// Big-O = O(log n) --> reducing input size by half
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }

  return true;
}

/*
Bitwise Power of Two
1 -> 1
2 -> 10
4 -> 100
8 -> 1000
 */

// Big-O = O(1) --> constant time
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false

console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(2)); // true
console.log(isPowerOfTwoBitWise(5)); // false

// Big-O = O(log n) --> reducing input size by half
