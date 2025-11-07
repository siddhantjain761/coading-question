class Solution{
    constructor(arr){
        this.arr = arr;
        this.subarr = []
        this.temp = []
    }
    subSetarr(temp,left){
        // for(var k=0; k < this.arr.length; k++ ){
        //     console.log(temp);
        //     this.subarr.push(temp);
        // }
         
        for(var j=left; j< this.arr.length; j++){
            this.temp[left] = this.arr[j];
            this.temp = this.temp.filter(() => true);
            console.log(this.temp);
            this.subarr.push(this.temp);  
            //console.log(this.subarr)  
            this.subSetarr(this.temp,j+1);
            //this.temp.pop();
        }
        this.temp.pop();            
    }
}
var temp = [];
var left = 0;
const myIstance = new Solution([1,2,3]);
console.log(myIstance.subSetarr(temp,left));