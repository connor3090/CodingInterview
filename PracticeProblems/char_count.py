def char_count_rec(arr, num):
    if len(arr) == 1:
        if arr[0] == num:
            return 1
        else:
            return 0
    else:
        return char_count_rec(arr[0:(len(arr)/2)], num) + char_count_rec(arr[len(arr)/2:], num)


arr = [1,2,1,5,7,2,1,2,1]
print(char_count_rec(arr, 2))