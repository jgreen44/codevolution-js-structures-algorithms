# O(n^2)
def recursive_fibonacci(n):
    # base case
    if n < 2:
        return n
    return recursive_fibonacci(n - 1) + recursive_fibonacci(n - 2)


print(recursive_fibonacci(0))  # = 0
print(recursive_fibonacci(1))  # = 1
print(recursive_fibonacci(6))  # = 8
