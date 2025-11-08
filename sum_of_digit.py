# Using numeric approach
def sum_of_digit_numeric(n):
    num = int(n)
    sum = 0
    while num > 0:
        digit = num % 10
        num = num // 10  # Using integer division in Python
        sum = sum + digit
    return sum

# Using string manipulation approach
def sum_of_digit_string(n):
    # Convert to string, split into characters, convert each back to int and sum
    return sum(int(digit) for digit in str(n))

# Test cases
print(sum_of_digit_numeric("364"))  # Should print 13
print(sum_of_digit_string("364"))   # Should print 13