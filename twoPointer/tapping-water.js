function tapWater(arr){
    var left = 0;
    var right = arr.length - 1;
    var maxVol =0
    while(left < right){
        var currVol = Math.min(arr[left],arr[right]) * Math.abs(right - left)
        maxVol = Math.max(currVol,maxVol)
        if(arr[left] <= arr[right]){
            left = left + 1
        }else if(arr[left] > arr[right]){
            right = right -1 
        }
    }
    return maxVol

}
var arr=[1,3,4,5,3,6,8,4]
console.log(tapWater(arr))