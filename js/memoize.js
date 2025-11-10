const calc = (a,b)=>{
    console.log("memo")
    return a*b
}
const add = (a,b)=>{
    console.log("memo")
    return a+b
}

function memoize(func) {
        const cache = {}; // This closure will store computed results

        function temp(...args) {
            // Create a unique key for the cache based on the arguments
            const key = args.join("_"); 
            console.log(key)

            // If the result is already in the cache, return it
            if (cache[key]) {
                console.log("Fetching from cache for key:", key);
                return cache[key];
            }

            // Otherwise, compute the result, store it in the cache, and return it
            console.log("Calculating and storing for key:", key);
            const result = func(...args);
            cache[key] = result;
            return result;
        };
        return temp
    }
    

const memoizedAdd = memoize(add);
const memoizedmulti = memoize(calc);

console.log(memoizedAdd(1,2))
console.log(memoizedAdd(1,2))
console.log(memoizedmulti(1,2))