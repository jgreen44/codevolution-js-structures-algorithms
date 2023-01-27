import math


def binary_search(arr, target):
    left_index = 0
    right_index = len(arr) - 1

    while left_index <= right_index:
        middle_index = math.floor((left_index + right_index) / 2)
        if target == arr[middle_index]:
            return middle_index
        if target < arr[middle_index]:
            right_index = middle_index - 1
        else:
            left_index = middle_index + 1
    return -1


test_array = [-5, 2, 4, 6, 10]

print(binary_search(test_array, 10))  # 4
print(binary_search(test_array, 6))  # 3
print(binary_search(test_array, 20))  # -1
