//Sort a string according to the frequency of characters
//https://www.geeksforgeeks.org/dsa/sort-a-string-according-to-the-frequency-of-characters/
function sortFrequency(s){
    var map ={}
    for(let ch of s){
        map[ch] = map[ch]?map[ch]+1 : 1;
    }
    console.log(map);
    let heap = []
    for(let ch in map){
        heap.push([map[ch],ch.charCodeAt(ch)])
    }
    console.log(heap)

    heap.sort((a,b) =>{
        console.log(a[0],a[1])
        if(a[0] == b[0]){
            return b[1]-a[1] //sort in descending order
        }else{
            return b[0]-a[0]
        }
    });
    console.log(heap);

    var a = "";
    for(let i of heap){
        ch = String.fromCharCode(i[1])
        a += ch.repeat(i[0])
    }


    return a;

}
var s = "forggkksseeee";
console.log(sortFrequency(s));
