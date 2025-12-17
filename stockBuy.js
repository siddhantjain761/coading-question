function maxProfit(stock){
    var buy = stock[0];
    var maxProfit = 0;
    for(let i =1; i<= stock.length -1; i++){
        if(stock[i] < buy){
            buy = stock[i]
        }else{
            currentProfit = stock[i] - buy
            if(currentProfit >= maxProfit){
                maxProfit = currentProfit;
            }
        }
    }
    return maxProfit
}

var stock = [25,34,10,45,60,2,33,0,10]
console.log(maxProfit(stock))