# //largets element in an arry most optimal approch 
def largestelement(arr):
    largestele = arr[0]
    for i in range(1,len(arr)):
        if(arr[i] > largestele):
            largestele = arr[i]
    return largestele
 

arr = [2,4,2,34,5,7,4]
print(largestelement(arr))