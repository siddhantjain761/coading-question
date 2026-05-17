class CircuitBreaker {
  constructor(fn, options = {}) {
    this.fn = fn;
    this.state = "CLOSED";       // CLOSED, OPEN, HALF_OPEN
    this.failureCount = 0;
    this.successCount = 0;
    this.lastFailureTime = null;

    this.failureThreshold = options.failureThreshold || 3;
    this.recoveryTime = options.recoveryTime || 10000; // 10 seconds
    this.successThreshold = options.successThreshold || 2;
  }

  async call(...args) {
    if (this.state === "OPEN") {
      const elapsed = Date.now() - this.lastFailureTime;
      if (elapsed >= this.recoveryTime) {
        this.state = "HALF_OPEN";  // Try again
      } else {
        throw new Error("Circuit is OPEN — request blocked");
      }
    }

    try {
      const result = await this.fn(...args);
      this.onSuccess();
      return result;
    } catch (err) {
      this.onFailure();
      throw err;
    }
  }

  onSuccess() {
    this.failureCount = 0;
    if (this.state === "HALF_OPEN") {
      this.successCount++;
      if (this.successCount >= this.successThreshold) {
        this.state = "CLOSED";
        this.successCount = 0;
      }
    }
  }

  onFailure() {
    this.failureCount++;
    this.lastFailureTime = Date.now();
    if (this.failureCount >= this.failureThreshold || this.state === "HALF_OPEN") {
      this.state = "OPEN";
      this.successCount = 0;
    }
  }
}



const apiMock = new Promise((resolve,reject)=>{
    const r = {
        name:"jason data",
        company: "accenture"
    }
    const statuscode = 300;
    if(statuscode == '200'){
        resolve(r)
    }else{
        reject(new Error("api failed"));
    }     
})

//How to use 


// Wrap your API call
const breaker = new CircuitBreaker(
  () => apiMock,
  { failureThreshold: 3, recoveryTime: 10000  }
);


 


//Use it instead of calling fetch directly
async function fetchData(callNumber) {
  try {
    const res = await breaker.call();
    console.log("Success:", res);
    console.log(`Call ${callNumber}  Success:`, res);
    return res;
  } catch (err) {
    console.log(`Call ${callNumber} ❌ [State: ${breaker.state}] — ${err.message}`);
    return (err.message); // "Circuit is OPEN — request blocked"
  }
}


// (async () => {
//   console.log(await fetchData());
// })();
(async () => {
  for (let i = 1; i <= 1000; i++) {
    await fetchData(i);
  }
})();