# Example 1
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[-1]
    left = []
    right = []
    for i in range(len(arr) - 1):
        if arr[i] < pivot:
            left.append(arr[i])
        else:
            right.append(arr[i])
    return quick_sort(left) + [pivot] + quick_sort(right)


# Example 2
def quick_sort_in_place(arr, left=0, right=None):
    if right is None:
        right = len(arr) - 1
    if left < right:
        pivot = partition(arr, left, right)
        quick_sort_in_place(arr, left, pivot - 1)
        quick_sort_in_place(arr, pivot + 1, right)
    return arr


def partition(arr, left, right):
    pivot = arr[right]
    i = left
    for j in range(left, right):
        if arr[j] < pivot:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    arr[i], arr[right] = arr[right], arr[i]
    return i


test_array = [8, 20, -2, 4, -6]
print('Regular QuickSort', quick_sort(test_array))  # [ -6, -2, 4, 8, 20 ]
print('In-Place QuickSort', quick_sort_in_place(test_array))  # [ -6, -2, 4, 8, 20 ]
