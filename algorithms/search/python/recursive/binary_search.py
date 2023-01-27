# O(log n)
def recursive_binary_search(arr, target):
    return search(arr, target, 0, len(arr) - 1)


def search(arr, target, left_index, right_index):
    # base case
    if left_index > right_index:
        return -1

    middle_index = (left_index + right_index) // 2
    if target == arr[middle_index]:
        return middle_index

    if target < arr[middle_index]:
        return search(arr, target, left_index, middle_index - 1)
    else:
        return search(arr, target, middle_index + 1, right_index)


test_array = [-5, 2, 4, 6, 10]

print(recursive_binary_search(test_array, 10))  # 4
print(recursive_binary_search(test_array, 6))  # 3
print(recursive_binary_search(test_array, 20))  # -1

import math

math.floor()
