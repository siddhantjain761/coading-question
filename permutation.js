// https://www.youtube.com/watch?v=GuTPwotSdYw
// ALL the permuation of a given string
// concept used :: Recurssion and backtracking
class Solution{
    constructor(str){
        this.str = str;
        this.perm = [];
    }
    permutation (left,word){ 
        let right = word.length;
        for(let i = left; i<right; i++){
            this.swapCharacter(left,i);
            this.permutation(left+1,this.str);
            this.swapCharacter(left,i);
        }
        return this.perm;
    }
    swapCharacter(left,i){
        let charArray = this.str.split('');
        let tmp = charArray[left];
        charArray[left] = charArray[i];
        charArray[i] = tmp;
        this.str = charArray.join('')
        this.perm.includes(this.str) ? "" : this.perm.push(this.str);
    }
}
let left = 0;
const myInstance = new Solution("ABC");
console.log(myInstance.permutation(left,"ABC"))