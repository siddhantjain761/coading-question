# left rotate an array by k place
def reverseArr(arr,start,end):
    while(start <= end):
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start+=1
        end-=1
    return arr
arr = [1,2,3,4,5,6,7,8]
n =len(arr)
k=4
rotate=k%n
print(rotate)
print(reverseArr(arr,0,rotate-1))
print(reverseArr(arr,rotate,n-1))
print(reverseArr(arr,0,n-1))

