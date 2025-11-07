# contunous subarr whose sum is equal to given target

def pre_fix_sum(arr):
    for i in range(1,len(arr)+1):
        arr[i] += arr[i-1]
        if(arr[i] == target)

arr = [2,5,7,3,6]
target = 10
pre_fix_sum(arr,target)