def g(n):
    if n <= 1:
        return n
    else:
        return 5 * g(n-1) - 6 * g(n-2)

print(g(4))