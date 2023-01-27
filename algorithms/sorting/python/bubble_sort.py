def bubble_sort(arr):
    swapped = True
    while swapped:
        swapped = False
        for i in range(len(arr) - 1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True


test_array = [8, 20, -2, 4, -6]  # [ -6, -2, 4, 8, 20 ]
bubble_sort(test_array)
print(test_array)
