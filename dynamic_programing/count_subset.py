# find no: of subset exit which sums up to given target
# https://www.youtube.com/watch?v=_gPcYovP7wc
def findSubset(matrix):
    for i in range(len(arr)+1):
        for j in range(sum+1):
            if(i== 0):
                matrix[i][j] = 0
            if(j == 0):
                matrix[i][j] = 1
            if(i>0):
                if(arr[i-1] <= j):
                   matrix[i][j] = matrix[i-1][j - arr[i-1]] + matrix[i-1][j]
                else:
                   matrix[i][j] = matrix[i-1][j] 

    return matrix[len(arr)][sum]

arr = [1,2,3,7,8,10]
sum = 19
matrix = [[0 for col in range(sum+1)] for row in range(len(arr)+1)]
print(findSubset(matrix))
#print(matrix)
for i in range(len(arr)+1):
    for j in range(sum+1):
        print(matrix[i][j],end=" ")
    print()    