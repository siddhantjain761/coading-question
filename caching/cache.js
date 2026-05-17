// The fix — LRU cache (Least Recently Used)
// Same concept as Redis eviction — when cache is full, throw out the item used least recently:a

class LRUCache {
    constructor(limit = 50) {
        this.limit = limit;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return null;

        // move to end = mark as recently used
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);         // refresh position
        } else if (this.cache.size >= this.limit) {
            // Map maintains insertion order
            // first key = least recently used → delete it
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
            console.log(`Cache full — evicted: ${oldestKey}`);
        }

        this.cache.set(key, value);
    }

    has(key) { return this.cache.has(key); }
    size() { return this.cache.size; }
}





//Plug it into memoize:


function memoizeWithLRU(fn, { limit = 50, ttlMs = 60000 } = {}) {
    const cache = new LRUCache(limit);

    return async function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            const { value, expiresAt } = cache.get(key);
            if (Date.now() < expiresAt) {
                console.log(`Cache hit  — size: ${cache.size()}/${limit}`);
                return value;
            }
        }

        console.log(`Cache miss — size: ${cache.size()}/${limit}`);
        const value = await fn(...args);
        cache.set(key, { value, expiresAt: Date.now() + ttlMs });
        return value;
    };
}



//Use it:


const fetchUser = async (userId) => {
    const res = await fetch(`/api/users/${userId}`);
    return res.json();
};

const memoizedFetchUser = memoizeWithLRU(fetchUser, {
    limit: 50,      // max 50 users in cache
    ttlMs: 30000    // each expires after 30s
});

await memoizedFetchUser("user1");  // cache miss  — size: 1/50
await memoizedFetchUser("user2");  // cache miss  — size: 2/50
await memoizedFetchUser("user1");  // cache hit   — size: 2/50
// ... after 50 unique users, oldest gets evicted automatically



///What happens step by step when cache is full:


// cache limit = 3
// ─────────────────────────────────────────
// fetch("user1") → miss → cache: [user1]
// fetch("user2") → miss → cache: [user1, user2]
// fetch("user3") → miss → cache: [user1, user2, user3]  ← full
// fetch("user1") → hit  → cache: [user2, user3, user1]  ← user1 moved to end
// fetch("user4") → miss → evict user2 (oldest)
//                → cache: [user3, user1, user4]