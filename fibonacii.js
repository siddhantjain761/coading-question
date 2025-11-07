function fibonacii(n){
    let fab = [0,1];
    let p1 = 0;
    let p2 = 1;
    let curr;
    if(n==0) return 0;
    else if( n==1) return 1;
    else{
        for(let i = 3; i< n+1; i++){
            curr = p1 + p2;
            p1 = p2;
            p2 = curr; 
            fab.push(curr)
        }
        return fab;
    }

}
console.log(fibonacii(6))