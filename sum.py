def countRecur(coin,sum):
    if(sum == 0):
        return 1
    if(sum < 1):
        return 0:
    
    return countRecur(coins[0,len(coins)],sum-coins[i]) + countRecur(coins[i,len(coins)],sum)
    
coins = [1,2,3]
sum = 5
countRecur(coins,sum)