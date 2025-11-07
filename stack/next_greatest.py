# next 1st greatest elemnt in array , if present add that to it position else add -1 
# https://www.youtube.com/watch?v=e7XQLtOQM3I
def nextGreatest(arr,result):
    stack =[]
    for i in range(len(arr)-1,-1,-1):
        while(len(stack)!=0):
            if(stack[-1]>arr[i]):
                result[i] = stack[-1]
                break
            else:
                stack.pop()    
        stack.append(arr[i])
    return result
arr = [4,12,3,5,3,9,5,10,2]
result = [-1]*len(arr)
print(nextGreatest(arr,result))