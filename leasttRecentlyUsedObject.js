// use Map to create least recently used pattern implemented in javascript
class LRU {
  constructor(max = 5) {
    this.max = max;
    this.cache = new Map();
  }

  get(key) {
    let item = this.cache.get(key);
    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }

  set(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size === this.max) this.cache.delete(this.first());
    this.cache.set(key, value);
  }

  first() {
    return this.cache.keys().next().value;
  }
}

let lruCache = new LRU(3);
lruCache.set("name", "prashanr");
lruCache.set("age", "30");
lruCache.set("class", 40);
console.log(lruCache.cache);
lruCache.get("age");
console.log(lruCache.cache);
lruCache.set("heloo", "heloo");

console.log(lruCache.cache);
