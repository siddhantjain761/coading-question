//flatter array
var arr =[1,2,3,[2,6,7],[1,5,6],{"api": "response"}]
var flatarry =[]

const flatter = (arr)=>{
    for(var i =0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flatter(arr[i])
        }else{
            flatarry.push(arr[i])
        }
    }
}
flatter(arr)
console.log(flatarry)