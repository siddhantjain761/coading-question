// 
// find kth largest Element in a arry, for larget elemnt use min heap and for smallest use max heap
function min_heap(heap){
    let rep;   
        for(let h = 0;h<heap.length;h++){
            console.log("helloo",heap)
        var ParentNode = heap[Math.floor(Math.abs(h-1)/2)];
        if(ParentNode > heap[h]){
            rep = ParentNode;
            console.log("////////",rep,heap[h])
            heap[Math.floor(Math.abs(h-1)/2)] = heap[h];
            heap[h] = rep;
            console.log("////////",ParentNode,heap[h],"ssdsd",heap)
        }  
       }
     
}

var arr = [3,6,1,10,7,12,15]
k = 3;
var heap = [];
var flag = 0;
for(let i =0; i<= arr.length -1; i ++){  
    if (flag == 0) {
        if (heap.length <= k) {
            heap.push(arr[i])
            min_heap(heap);
        }
        if(heap.length == k){
            flag=1
        }else {
            flag=0;
        }
    }else{
        if(arr[i] > heap[0]){
            heap[0] = arr[i]
            min_heap(heap);
        }
    }
     
      
}
console.log(heap);