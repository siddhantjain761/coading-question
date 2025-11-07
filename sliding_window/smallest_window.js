class Soluation{
    smallestWindow(s){
        let count = { '0': 0, '1': 0, '2': 0 };
        let flag = false;
        var l = 0;
        var r = 0;
        var str;
        for(r =0; r<s.length; r++){
            count[s[r]]++
            while(count['0'] > 0 && count['1'] > 0 && count['2'] >0){
                flag = true;
                str =  s.slice(l,r+1);
                count[s[l]]--;
                l++;
                 
            }
        }
        if(flag){
            return str;
        }else{
            return -1;
        }

    }
}
var myInstance = new Soluation()
console.log(myInstance.smallestWindow("12102110"));