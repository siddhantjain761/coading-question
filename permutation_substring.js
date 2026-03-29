//https://www.geeksforgeeks.org/dsa/check-if-permutation-of-pattern-is-substring/
function checkPermutation(freq){
    for(let i=0;i<=freq.length -1 ; i++){
        if(freq[i]!= 0){
            return false
        } 
    }
    return true
}

function search (txt,pat){
    let freq = new Array(26).fill(0);
    let m=txt.length;
    let n = pat.length;
    for(let i=0;i<=n-1; i++ ){
        freq[txt.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
        freq[pat.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1; 
    }
    //initial window
    if(checkPermutation(freq)){
        return true
    }
    for(let i = n; i<=m-1;i++){
        freq[txt.charCodeAt(i) - 'a'.charCodeAt(0)] +=1;
        freq[txt.charCodeAt(i-n) - 'a'.charCodeAt(0)] -=1;
        if(checkPermutation(freq)){
        return true
    }
    }
    return false
}
txt ="adcdee"
pat = "ede"
console.log(search(txt,pat))



 

