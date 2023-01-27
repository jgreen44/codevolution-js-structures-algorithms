def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1


test_array = [-5, 2, 10, 4, 6]
print(linear_search(test_array, 10))  # 2
print(linear_search(test_array, 6))  # 4
print(linear_search(test_array, 20))  # -1
