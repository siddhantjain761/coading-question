function tap_water(arr){
    let l =0;
    let r = arr.length; 
    var maxl;
    var maxr;
    var min;
    var sum = 0;
    for(let i = 1;i<arr.length-1;i++){
        maxr = maxheap(i+1,arr.length);
        console.log("maxr",maxr)
        maxl = maxheap(0,i);
        console.log("maxl",maxl)
        min = Math.min(maxl,maxr)
        if(min-arr[i] >0){
            sum = sum + (min-arr[i]);
        }       
    }
    return sum;
}

function maxheap(heap){
    let rep;   
        for(let h = 0;h<heap.length;h++){
            console.log("helloo",heap)
        var ParentNode = heap[Math.floor(Math.abs(h-1)/2)];
        if(heap[h] > ParentNode){
            rep = ParentNode;
            console.log("////////",rep,heap[h])
            heap[Math.floor(Math.abs(h-1)/2)] = heap[h];
            heap[h] = rep;
            console.log("////////",ParentNode,heap[h],"ssdsd",heap)
        }  
       }
       return heap
 
}
var arr = [6,7,3,1,2]
maxheap(arr)
//console.log("hello",tap_water(arr))
