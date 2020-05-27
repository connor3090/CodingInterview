a = [12,5,11,6,10,7,9,8]
b = range(1,len(a))
c = b[::-1]
print(c)

for i in c:
    position = i
    for j in range(0,i-1):
        if a[j] > a[position]:
            position = j
        if position != i:
            temp = a[i]
            a[i] = a[position]
            a[position] = temp
    print(a)



