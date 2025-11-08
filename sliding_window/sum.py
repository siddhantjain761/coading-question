def target_sum(arr, target_sum):
        """
        Finds a contiguous subset of arr whose sum equals target_sum.
        Returns the subset if found, otherwise returns -1.
        """
        curr_sum = 0
        left = 0        
        for right in range(len(arr)):
            curr_sum += arr[right]            
            # Shrink window while sum is greater than target
            while curr_sum > target_sum:
                curr_sum -= arr[left]
                left += 1           
            # If we found the target sum, return the subarray
            if curr_sum == target_sum:
                return arr[left:right + 1]       
        return -1

test_arr = [1, 3, 6, 17, 4, 5, 7]
test_sum = 16
    
result = target_sum(test_arr, test_sum)
 
print(f"Result: {result}")
    
 
 
 