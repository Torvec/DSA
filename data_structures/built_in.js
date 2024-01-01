//! Array
//! ===============================================================================================
// * Big-O
// insert/remove from end = O(1)
// insert/remove from beginning = O(n)
// Access = O(1)
// Search = O(n)
// Push/Pop = O(1)
// Shift/unshift/concat/slice/splice = O(n)
// forEach/map/filter/reduce = O(n)

const arr = [1, 2, 3, "Edward"];
arr.push(4); // arr = 1, 2, 3, Edward, 4
arr.unshift(0); // arr = 0, 1, 2, 3, Edward, 4
arr.pop(); // Removes 4
arr.shift(); // Removes 0

for (const item of arr) {
  console.log(item);
}
// 1
// 2
// 3
// Edward


//! Objects
//! ===============================================================================================
// * Big-O
// Insert/Remove = O(1)
// Access = O(1)
// Search = O(n)
// Object.keys() = O(n)
// Object.values = O(n)
// Object.entries = O(n)

const obj = {
  name: "Edward",
  age: 37,
  sayMyName: function () {
    console.log(this.name);
  },
};

obj.hobby = "hiking";
console.log(obj.name); // Edward
console.log(obj["age"]); // 37
console.log(obj); // { name: Edward, age: 37, hobby: 'hiking' }
obj.sayMyName(); // Edward


//! Set
//! ===============================================================================================
//* Big-O

const set = new Set([1, 2, 3]);
set.add(4);
set.add(4); // Will be ignored, as 4 is already in the set
console.log(set.has(4)); // true
console.log(set.size); // 4
for (const item of set) {
  console.log(item);
}
// 1
// 2
// 3
// 4
set.clear(); // removes all values


//! Maps
//! ===============================================================================================
//* Big-O

const map = new Map([
  ["a", 1],
  ["b", 2],
]);
map.set("c", 3); // this set is a method, not the data structure above
console.log(map.has("a")); // true
console.log(map.size); // 3
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// a: 1
// b: 2
// c: 3
map.delete("c"); // removes c: 3
map.clear(); // removes all

