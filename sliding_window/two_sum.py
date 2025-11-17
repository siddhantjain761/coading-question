# if tehre exist 2 number which sums up to given target 
# approcah used is 2 pointer, 1st sort the arry 
def two_sum(arr1,t):
    arr = sorted(arr1)
    flag =False
    l=0
    r=len(arr)-1
    while(l<=r):
        sum = arr[l]+arr[r]
        if(sum == t):
            flag = True
            break
        elif(sum > t):
            r-=1
        elif(sum < t):
            l+=1

    if(flag):
        return (arr[l],arr[r])
    else:
        return -1
arr = [4,1,2,3,1]
target = 5
print(two_sum(arr,target))