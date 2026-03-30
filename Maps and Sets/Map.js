class CustomMap {
  constructor() {
    this.size = 0;
    this.capacity = 100;
    this.buckets = new Array(this.capacity);
  }

  // Hash
  hash(key) {
    const stringKey = String(key);

    let hash = 1;

    for (let i = 0; i < stringKey.length; i++) {
      hash += 31 * stringKey.charCodeAt(i);
    }
    return hash % this.capacity;
  }

  // Has
  has(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return false;
    }
    for (const item of this.buckets[index]) {
      if (item.key === key) {
        return true;
      }
    }
  }

  // Add
  set(key, value) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    for (let i = 0; i <= this.buckets[index].length; i++) {
      if (this.buckets[index].key === key) {
        this.buckets[index] = { key, value };
        return;
      }
      this.buckets.push({ key, value });
    }
  }

  // Delete
  delete(key) {
    const index = this.hash(key);

    if (this.buckets[index]) {
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index].key === key) {
          this.buckets.splice(index, 1);
        }
      }
    }
  }
}

const myMap = new CustomMap();
myMap.set(12, "twelve");
console.log(myMap.has(12));
myMap.delete(12);
console.log(myMap.has(12));
