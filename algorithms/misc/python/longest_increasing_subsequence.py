def longest_increasing_subsequence(arr):
    n = len(arr)
    lis = [1] * n  # create an array filled with 1s
    for i in range(1, n):
        for j in range(0, i):
            if arr[i] > arr[j] and lis[i] < lis[j] + 1:
                lis[i] = lis[j] + 1
    maximum = 0
    for i in range(n):
        maximum = max(maximum, lis[i])
    return maximum


test_array = [10, 22, 9, 33, 21, 50, 41, 60]
print(F"Length of LIS is {longest_increasing_subsequence(test_array)}")
