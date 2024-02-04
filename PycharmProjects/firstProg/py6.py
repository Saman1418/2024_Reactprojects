# a = [1,2,3,4,5]
# n=5
# for i in range(0,n-1,2):
#     print(a[i])
#     a[i],a[i+1]=a[i+1],a[i]
# print(a)
# A=[16,17,4,3,5,2]
# N=6
# a=[]
# for i in range(0,N):
#     if(A[i]>A[i+1,N-1]):
#         a.append(A[i])
# print(a)

# def sort012( arr, n):
#     a = []
#     b = []
#     c = []
#     for i in range(n):
#         if (arr[i] == 0):
#             a.append(arr[i])
#         elif (arr[i] == 1):
#             b.append(arr[i])
#         else:
#             c.append(arr[i])
#     a.extend(b)
#     a.extend(c)
#     print(arr)
#     arr = a
#     for i in arr:
#         print(i,end=" ")
#     print()
#     print(arr)
#
#
# sort012([0 ,2 ,1 ,2 ,0],5)
arr=[1,2,3,4,5,6,7,8,9]
idx=3
n=9
for i in range(idx,n-1):
    arr[i] = arr[i+1]
    print(arr[i], end=" ")

print(arr)