def insertion_sort(arr):
    for i in range(1, len(arr)):
        number_to_insert = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > number_to_insert:
            arr[j + 1] = arr[j]
            j = j - 1
        arr[j + 1] = number_to_insert


test_array = [8, 20, -2, 4, -6]
insertion_sort(test_array)
print(test_array)  # [-6, -2, 4, 8, 20]
