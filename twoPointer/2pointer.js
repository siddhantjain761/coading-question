function gettargerIndecies(arr,tar){
    arr = [...brr].sort()
    arr.sort((a,b) => a-b)
    var leftPointer = 0
    var rightPointer = arr.length -1
    while(leftPointer < rightPointer){
        if(arr[leftPointer] + arr[rightPointer] == tar){
            return ([arr[leftPointer],arr[rightPointer]])
        }else if(arr[leftPointer] + arr[rightPointer] < tar){
            leftPointer = leftPointer + 1 
        }else if(arr[leftPointer] + arr[rightPointer] > tar){
            rightPointer = rightPointer -1
        }
    }
    return (false)

}
brr= [1,6,3,7,5,4]
var arr =[]
var tar = 9
console.log(gettargerIndecies(brr,tar))
if(gettargerIndecies(brr,tar)){
console.log(brr.indexOf(gettargerIndecies(brr,tar)[0]),brr.indexOf(gettargerIndecies(brr,tar)[1]))
}else{
console.log("not found")
}