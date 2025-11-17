def removeDuplicate(arr):
    l =0
    for i in range(len(arr)):
        if(arr[i]!= arr[l]):
            temp = arr[l+1]
            arr[l+1]=arr[i]
            arr[i] = temp 
            l+=1           

    return arr
arr = [1,1,1,2,3,4,4,5]
print(removeDuplicate(arr))