# O(log n)
def is_power_of_two(n):
    if n < 1:
        return False

    while n > 1:
        if n % 2 != 0:
            return False
        n = n // 2

    return True


# O(1)
# The & operator compares the binary representation of n and n-1.
# If the result is 0, then the input number is a power of 2.
# If the result is not 0, the input number is not a power of 2,
# and the function returns False.
def is_power_of_two_bitwise(n):
    if n < 1:
        return False

    return (n & (n - 1)) == 0

# For example:
# Decimal number: 10 = 1010 in binary
# Decimal number: 3 = 0011 in binary
# if we use bitwise & operator (10 & 3) = 0010 = 2
#
# Another example:
# Decimal number: 7 = 0111 in binary
# Decimal number: 3 = 0011 in binary
# if we use bitwise & operator (7 & 3) = 0011 = 3
