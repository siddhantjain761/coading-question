function movieZeors(arr){
    zero_pointer = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]!=0){
            let temp = arr[zero_pointer]
            arr[zero_pointer] = arr[i],
            arr[i] = temp
            zero_pointer +=1
        }
    } 
     
    return arr
}
var arr =  [1,3,0,6,0,0,8,5]
console.log(movieZeors(arr))