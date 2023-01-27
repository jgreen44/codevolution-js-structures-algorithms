def merge_sort(arr):
    # base case
    if len(arr) < 2:
        return arr
    mid = len(arr) // 2
    left_array = arr[:mid]
    right_array = arr[mid:]
    return merge(merge_sort(left_array), merge_sort(right_array))


def merge(left_array, right_array):
    sorted_array = []
    while left_array and right_array:
        if left_array[0] <= right_array[0]:
            # use pop since element should be removed from left array
            sorted_array.append(left_array.pop(0))
        else:
            sorted_array.append(right_array.pop(0))
    return sorted_array + left_array + right_array


test_array = [8, 20, -2, 4, -6]
print(merge_sort(test_array))  # [ -6, -2, 4, 8, 20 ]
