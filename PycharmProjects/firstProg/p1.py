# def oddeven(l):
#     e = []
#     o = []
#     for i in l:
#         if(i%2==0):
#             e.append(i)
#         else:
#             o.append(i)
#     return e,o
#
# l=[1,2,3,4,5,6,7,8]
# print(oddeven(l))
# e,o=oddeven(l)
# print(e)
# print(o)
#


# def lessthan(l,x):
#     q=[]
#     for i in l:
#         if(i<x):
#             q.append(i)
#     return q
# l=[1,2,3,4,5,6,7,8]
# x=5
# print(lessthan(l,x))

# def largest(l):
#     q=0
#     for i in range(len(l)):
#         if(l[i]>q):
#             q=l[i]
#     return q
# l=[88888888822,55,33,8888888,99,123,66,555,33,4444]
# print(largest(l))


# def sorted(l):
#     for i in range(1,len(l)):
#         if(l[i-1]>l[i]):
#             return False
#
#     return True
# i = 1
# while i < len(l):
#     if(l[i] < l[i-1]):
#         return False
#     i+=1
# return True
# l=[1,2,55,6]
# if sorted(l):
#     print("yes")
# else:
#     print("no")


# def oddone(l):
#     q=None
#     for i in range(len(l)):
#         count=l.count(l[i])
#         if(count%2!=0):
#             q=l[i]
#             break
#     return q
#
# l=[1,1,2,2,2,3,4]
#
# print(oddone(l))

# def reverse(l):
#     s=0
#     e=len(l)-1
#     while s<e:
#         l[s],l[e]=l[e],l[s]
#         s+=1
#         e-=1
# l=[1,2,3,4,5,6,7,8]
# reverse(l)
# # print(l)
# def majorityWins(arr, x,y):
#     counterx=0
#     countery=0
#     for i in arr:
#         if(i==x):
#             counterx+=1
#         else:
#             countery+=1
#     if(counterx==countery):
#         return counterx
#     elif(counterx<countery):
#         return y
#     else:
#         return x
# arr=[1,2,3,3,4,5,6,7,8]
# x=2
# y=3
# print(majorityWins(arr,x,y))
# n = 5
# arr=[1, 1, 2,2,5]
# a=[]
# for i in range(n-1, -1, -1):
#
#     a.append(arr[i])
#
#
# print(a)
# def reverseArray(arr, n):
#     a = arr
#     arr=[]
#     arrs = []
#     for i in range(n - 1, -1, -1):
#         arrs.append(a[i])
#
#     print(arrs)
#
#
# n = 5
# arr = [1, 1, 2, 2, 5]
#
# reverseArray(arr, n)
#
# for e in arr:
#     print(e, end=' ')
# print()

# s="samanasugoqifqgwyfchcwqhfcgywc"
# count=0
# for i in s:
#     count+=1
# print(count)



# a=s.split("");
# print(a)


# # l=[1,2,3,4,5]
# let reverse = (str) => {
#     let strs = str.split("")
#     console.log(strs)
# }
# reverse


# arr = [1,2,3,4,5,6,7,8]
# n=2
# s=4
# a = slice(n-1,s)
# print(arr[a])
# arrs=[]
# for i in range(n-1,s):
#     arrs.append(arr[i])
# print(arrs)
# print(sum(arrs))
#
# arr = [1,1,2,2,3,4,55,5,5,5,5,5,5,5,5,6,7,7,7,8,8]
#
# count = 0
# d={}
# count = 0
# for i in arr:
#     if i in d:
#         d[i]+=1
#     else:
#         d[i]=1
# print(d)
# for key,value in d.items():
#     if value > count:
#         count = value
# print(key,value)
# print(count)

# for i in range(2,8):
#     print(i)

# arr = [1,2,3,4,5,6,7,8,9,10]
# N = 10
# sum = 14
# count = 0
# for i in range(N):
#     for j in range(i+1,N):
#         if (arr[i]+arr[j])==sum:
#             count+=1
# print(count)

# a=4
# r=6
# sum = a+r
# print(sum)

# def printNos(N):
#     if N == 0:
#         return
#     else:
#         print(N, end=" ")
#         printNos(N - 1)
#         print(N, end=" ")
#
# printNos(3)

# def search(arr,x):
#     for i in range(len(arr)):
#         if arr[i] == x:
#             return i
#
#     return -1
#
# arr=[1,2,3,4,6,7,5,8]
# x = 5
# print(search(arr,x))

def bsearch(l,x):
    low=0
    high=len(l)-1
    while(low<=high):
        mid=(low+high)//2
        if(l[mid]==x):
            return mid
        elif(x<l[mid]):
            high = mid - 1
        else:
            low = mid+1
    return -1



l=[1,2,3,4,5,6,7,8,9,10]
x=4
print(bsearch(l,x))