# Maximum sum of a subarray of size k
      
def max_sum(arr,k):
        max_sum_value = sum(arr[0:k])
        sum1 = int(max_sum_value)       
        for i in range(1, len(arr) - k + 1):
            sum1 = sum1 + arr[i + k - 1] - arr[i - 1]            
            if sum1 > max_sum_value:
                max_sum_value = sum1
                max_sum_arr = arr[i:i + k]
        
        return f"maxarr is {max_sum_arr} which sum's up as {max_sum_value}"

 
k = 3
arr = [3, 5, 1, 2, 5, 7, 4, 2]
solution = max_sum(arr, k)
print(solution)
    
 