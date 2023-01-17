// Implement a LRU cache

// LRU cache keeps key and values pair for faster access and its has a size so the least recently
//  used item is delete to make space for new item to be stored

// With function and help of closures

function LruCacheWithFunction(size) {
  const cacheSize = size;
  let cache = new Map();

  maincache = {
    value() {
      console.log(cache);
    },
    set(key, value) {
      if (cacheSize === cache.size) {
        cache.delete(cache.keys().next().value);
      }
      cache.set(key, value);
    },
    get(key) {
      if (cache.has(key)) {
        const value = cache.get(key);
        cache.delete(key);
        cache.set(key, value);
        return value;
      }
    },
  };
  return maincache;
}

const newCache1 = LruCacheWithFunction(3);

// newCache1.set("test0", "testing0");
// newCache1.set("test1", "testing1");
// newCache1.set("test2", "testing2");
// newCache1.set("test3", "testing3");
// newCache1.value();
// newCache1.set("test1", "testing1");
// newCache1.value();

// Using Classes

class LruCacheWithClass {
  constructor(size) {
    this.size = size;
    this.cache = new Map();
  }
  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
  }
  set(key, value) {
    if (this.size === this.cache.size) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
  value() {
    console.log(this.cache);
  }
}

const newCache2 = new LruCacheWithClass(3);

// newCache2.set("test0", "testing0");
// newCache2.set("test1", "testing1");
// newCache2.set("test2", "testing2");
// newCache2.set("test3", "testing3");
// newCache2.value();
// newCache2.set("test1", "testing1");
// newCache2.value();
