/**
 * Finds a contiguous subset of arr whose sum equals targetSum.
 * Returns the subset if found, otherwise returns -1.
 */
class Soluation{
    targetSum(arr,targetSum){
        var sum =0;
        let l=0;
        let r =0;
        let flag = false;
        for(r=0; r<arr.length; r++){
            sum = sum + arr[r];
            while(sum > targetSum){
                sum = sum - arr[l]
                l++;
            }
            if(sum == targetSum){
                flag = true;
                break
            }
        }
        // console.log("hello");
        if(flag){
            return arr.slice(l,r+1);

        }
        else{
            return -1;
        }
    }
}
var myInstance = new Soluation();
console.log(myInstance.targetSum([1,3,6,3,5,7],16));