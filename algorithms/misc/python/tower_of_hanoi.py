def tower_of_hanoi(n, from_rod, to_rod, using_rod):
    # base case
    if n == 1:
        print(f"Move disk 1 from {from_rod} to {to_rod}")
        return
    tower_of_hanoi(n - 1, from_rod, using_rod, to_rod)
    print(f"Move disk {n} from {from_rod} to {to_rod}")
    tower_of_hanoi(n - 1, using_rod, to_rod, from_rod)


tower_of_hanoi(3, 'A', 'C', 'B')
