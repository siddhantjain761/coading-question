//https://www.geeksforgeeks.org/dsa/check-for-balanced-parentheses-in-an-expression/
function vaildParantheses(a){
    let stack=[];
    let pair = 0;
    let l = 0;
    let r = a.length-1;
    let next =0;
    while(l<=r){
        if(a[l] == "("){
            stack.push("(");
            l +=1;
        }else if(a[l] == ")"){
            l +=1;
            if(stack.length !== 0){
                top = stack.length -1
                if(stack[top] == "("){
                    pair +=1; 
                    stack.pop();
                }
            }    
        }
    }
    return pair
}
var a = "((())(((())((()"
console.log(vaildParantheses(a));