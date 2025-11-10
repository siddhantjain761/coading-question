// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const apiResponse = 
    new Promise((resolve,reject)=>{
    const r = {
        name:"jason data",
        company: "accenture"
    }
    const statuscode = 200;
    if(statuscode == '200'){
        resolve(r)
    }else{
        reject("api fails")
    }
     
})


apiResponse
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})