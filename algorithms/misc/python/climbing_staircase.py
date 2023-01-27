def climbing_staircase(n):
    no_of_ways = [1, 2]
    for i in range(2, n):
        no_of_ways.append(no_of_ways[i - 1] + no_of_ways[i - 2])
    return no_of_ways[n - 1]


for j in range(1, 6):
    print(f"Climbing Staircase of {j} is {climbing_staircase(j)}")
