import math


# O(sqrt(n))
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

# This function check if a given number is prime or not. It uses a for loop to check for divisibility of the number
# by all integers from 2 to the square root of the number. If the number is divisible by any of these integers,
# the function returns False, indicating that the number is not prime. If the number is not divisible by any of these
# integers, the function returns True, indicating that the number is prime.

# The time complexity of this function is O(sqrt(n)) as the number of iterations in the loop is determined by the
# square root of the input number.
