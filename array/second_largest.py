# 2nd largets element in an arry most optimal approach 
def largestelement(arr):
    largestele = arr[0]
    seclargestele = arr[0] 
    for i in range(1,len(arr)):
        if(arr[i] > largestele):
            seclargestele = largestele
            largestele = arr[i]
        elif(arr[i] > seclargestele):
           seclargestele = arr[i]       
    return seclargestele
 
arr = [2,4,2,34,5,7,4]
print(largestelement(arr))