function reverseDigit(n){
    let s= parseInt(n)
    let num = Math.abs(s);
    let revNum = 0;
    while(num > 0) {
        den = num %10 ;
        revNum =revNum*10 + den;
        num = Math.floor(num/10);
    }
    return revNum * Math.sign(s)

}
console.log(reverseDigit("-1234"))