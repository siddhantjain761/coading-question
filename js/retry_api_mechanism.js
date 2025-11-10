// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// retry api call if ti fails with a delay of 1 sec and max retry can be 3
const apiMock = new Promise((resolve,reject)=>{
    const r = {
        name:"jason data",
        company: "accenture"
    }
    const statuscode = 300;
    if(statuscode == '200'){
        resolve(r)
    }else{
        reject("api fails")
    }     
})
const retry = (apiMock,retries,delay)=>{
   return new Promise((resolve,reject)=>{
    apiMock
    .then((result)=>{
        resolve(result)
    })
    .catch((err)=>{
        retriecount +=1
        if(retriecount <= retries){
            console.log(`retrying attemp`,retriecount)
            setTimeout((resolve,reject)=>{
                retry(apiMock,retries,delay)
                .then(result=>{
                  resolve(result)
                })
               .catch(err=>{
                  reject(err)
                })
                },delay,resolve,reject)
             
        }
        else{
            reject("max reities reached")
        }
        
    }) 
})
}

var delay =1000
var retries=3
var retriecount=0
// console.log(retry(apiMock,retries,delay))
retry(apiMock,retries,delay)
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})