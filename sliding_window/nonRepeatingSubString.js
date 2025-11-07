// Find the length and value of the longest substring without repeating characters using the sliding window technique.


function longestString(str){
    var m ={};
    let l= 0;
    let r = 0;
    let s = "";
    for(r=0;r<str.length;r++){
        if(m[str.charAt(r)] !== 1){
            m[str.charAt(r)] = 1
        }else{
            if(str.slice(l,r).length > s.length){
                s = str.slice(l,r)
            }
            while(l < r){
                m[str.charAt(l)] = 0;
                l++;
            }
            m[str.charAt(r)] = 1;
        }
    }
    return s;

}
console.log(longestString("asabcfeerrgads"));