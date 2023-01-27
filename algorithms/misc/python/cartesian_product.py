def cartesian_product(arr1, arr2):
    result = []
    for element in arr1:
        for item in arr2:
            result.append((element, item))
    return result
