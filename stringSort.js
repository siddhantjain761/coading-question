//Sort a string according to the frequency of characters
//https://www.geeksforgeeks.org/dsa/sort-a-string-according-to-the-frequency-of-characters/
function sortFrequency(s){
    var map ={}
    for(let ch of s){
        map[ch] = map[ch]?map[ch]+1 : 1;
    }
    let heap = []
    for(let ch in map){
        heap.push([map[ch],ch.charCodeAt(ch)])
    }

    heap.sort((a,b) =>{
        if(a[0] == b[0]){
            return b[1]-a[1] //sort in descending order
        }else{
            return b[0]-a[0]
        }
    });

    var a = "";
    for(let i of heap){
        ch = String.fromCharCode(i[1])
        a += ch.repeat(i[0])
    }


    return a;

}
var s = "forggkksseeee";
console.log(sortFrequency(s));
