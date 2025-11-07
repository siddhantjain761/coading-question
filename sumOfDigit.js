function sumOfDigit(n){
    let sum = 0 ; 
    let num = parseInt(n)
    while(num > 0){
        den = num%10 ;
        num = Math.floor(num/10)
        sum = sum + den;
    }
    return sum;
}

//using string manipulation
// function sumOfDigit(n){
//     let num = n.toString()
//     let arr = num.split("")
//     sum = arr.reduce((acc, val) => parseInt(acc) + parseInt(val));
//     return sum;
// }


console.log(sumOfDigit("364"));