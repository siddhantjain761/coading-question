//Maximum sum of a subarray of size k
class Soluation{
    constructor(arr,k){
        this.arr = arr;
        this.k = k;
        this.sum =0;
        this.maxSumValue = 0;
        this.maxSumArr = [];

    }
    maxSum(){
        this.maxSumValue = (this.arr.slice(0,this.k)).reduce((accumulatior,currValue) =>  accumulatior + currValue,0);
        this.sum = this.maxSumValue; 
        for(let i = 1; i<this.arr.length-this.k; i++){
            this.sum = this.sum + this.arr[i+this.k-1] - this.arr[i-1];
            if(this.sum > this.maxSumValue){
                this.maxSumValue = this.sum;
                this.maxSumArr = this.arr.slice(i, this.k+i);
            }
        }
        return "maxarr is "+ this.maxSumArr + " which sum's up as " + this.maxSumValue;
    }

}
let k = 3;
var myInstance  = new Soluation([3,5,1,2,5,7,37,4,2],k);
console.log(myInstance.maxSum());