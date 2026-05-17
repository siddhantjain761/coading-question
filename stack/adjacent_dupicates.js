//remove adjacent duplicated 
//a = "abbaca"
//output "ca"
//use stack when a question talk about adjuscent items

function removeDuplicated(str){
    stack =[]
    for(let i of str){
        if(stack.length > 0){
            if(i == stack[stack.length -1]){
                stack.pop()
            }else{
                stack.push(i);
            }
        }else{
            stack.push(i)
        }
    }
    return stack.join("")

}


var str = "abbaca"
var out = removeDuplicated(str);
console.log(out);