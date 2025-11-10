# find if the subset exit whic sums up to given target
# https://www.youtube.com/watch?v=_gPcYovP7wc
def findSubset(matrix):
    for i in range(len(arr)+1):
        for j in range(sum+1):
            if(i== 0):
                matrix[i][j] = False
            if(j == 0):
                matrix[i][j] = True 
            if(i>0):
                if(arr[i-1] <= j):
                   matrix[i][j] = matrix[i-1][j - arr[i-1]] or matrix[i-1][j]
                else:
                   matrix[i][j] = matrix[i-1][j] 

    return matrix[len(arr)][sum]

arr = [2,3,7,8,10]
sum = 5
matrix = [[False for col in range(sum+1)] for row in range(len(arr)+1)]
print(findSubset(matrix))
#print(matrix)
for i in range(len(arr)+1):
    for j in range(sum+1):
        print(matrix[i][j],end=" ")
    print()    