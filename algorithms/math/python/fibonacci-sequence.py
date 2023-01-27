import math


# O(n)
def fibonacci_dp(n):
    if n == 0:
        return 0
    if n == 1:
        return 1

    # Create an array to store the fibonacci numbers
    fib = [0] * (n + 1)

    # Initialize the first two numbers
    fib[0] = 0
    fib[1] = 1

    # Iterate through the array and fill in the remaining numbers
    for i in range(2, n + 1):
        fib[i] = fib[i - 1] + fib[i - 2]
    return fib[n]


print(fibonacci_dp(0))  # 0
print(fibonacci_dp(1))  # 1
print(fibonacci_dp(6))  # 8


# O(1)
# Binet's Formula
# this formula may not give accurate results for very large
# values of n due to floating-point precision errors.
def fibonacci_closedform(n):
    sqrt5 = math.sqrt(5)
    phi = (1 + sqrt5) / 2
    return int((phi ** n - (1 - phi) ** n) / sqrt5)


print(fibonacci_closedform(0))  # 0
print(fibonacci_closedform(1))  # 1
print(fibonacci_closedform(6))  # 8
