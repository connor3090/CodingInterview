def Power(y, z):
    answer = 1
    while z > 0:
        
        if z % 2 == 1:
            answer = answer * y

        z = z / 2
        y = y * y
    return answer

def RecPower(y,z):
    if z == 0:
        return 1
    if z % 2 == 1:
        return (RecPower(y*y, z/2) * y)
    else:
        return RecPower(y*y, z/2)


print(Power(5,5))