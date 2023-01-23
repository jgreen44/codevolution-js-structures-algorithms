// Problem: Give an integer 'n', find the factorial (n!) of that integer
// factorial(4) = 4*3*2*1 = 24

function recursiveFactorial(n) {
  // base case
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 120

// Big-O = O(n)
