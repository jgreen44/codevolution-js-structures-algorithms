# O(n^2)
def recursive_factorial(n):
    # base case
    if n == 0:
        return 1
    return n * recursive_factorial(n - 1)


print(recursive_factorial(0))  # 1
print(recursive_factorial(1))  # 1
print(recursive_factorial(5))  # 120
