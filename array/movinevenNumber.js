//move all the even number to the end

function isEven(x){
    x = parseInt(x)
    return x%2 == 0 ? true : false;
}

function moveEven(arr){
    let even_pointer = 0 ;
    for(let i in arr){
        console.log(isEven(arr[i]))
        if(!isEven(arr[i])){
            let tmp = arr[even_pointer];
            arr[even_pointer] = arr[i];
            arr[i] = tmp
            even_pointer +=1;
        }
    }
    // console.log(even_pointer)
    // arr.slice(even_pointer).sort((a,b) => a - b);
    return arr
}

let arr =[1,2,3,16,8,5,9,11,12]
console.log(moveEven(arr))