//! Hash Table/Hash Map
//! ===============================================================================================
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charChodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    // This can cause a collision and loss of data
    // this.table[index] = value;
    // This resolves the collision by creating a sub array for a given index
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}
const table = new HashTable(50);
// This is what the output looked like before the collision corrections were made
// table.set("name", "bruce");
// table.set("age", 25);
// table.display(); // 1 25 , 17 bruce - 25 is stored at index 1 and bruce is stored at index 25
// console.log(table.get("name")); // Bruce
// table.remove("name");
// table.display(); // 1 25

// This is after the changes were made
table.set("name", "Bruce");
table.set("age", 25);
table.display(); // 1 [['age', 25]] 17 [['name', 'Bruce']]

console.log(table.get("name")); // Bruce

table.set("mane", "Clark");
table.set("name", "Diana");
// 1 [['age', 25]] 17 [['name', 'Diana'], ['mane', 'Clark']] - Diana overrides bruce, mane would have overrided name because they have the same letters just re-arranged
table.display();

table.remove("name");
table.display(); // 1 [['age', 25]] 17 [['mane', 'Clark']]