def naturalno(n):
    sum = 0
    # if(n==0):
    #     return
    # # print(n)
    # naturalno(n-1)
    # print(n)
    if(n==0):
        return 0
    return n + naturalno(n-1)


print(naturalno(5))