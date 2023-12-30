//! Linked List
//! ===============================================================================================
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0; // returns true if empty
  }
  getSize() {
    return this.size;
  }
  // Big-O = O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  // Big-O = O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      // Loop will run until prev.next points to null
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        return value;
      }
      return null;
    }
  }
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      const curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log("List is empty? ", list.isEmpty()); // List is empty? True
console.log("List size: ", list.getSize()); // List size: 0
list.print(); // List is empty

list.prepend(10);
list.print(); // 10

list.prepend(20);
list.prepend(30);
list.print(); // 30 20 10

list.append(40);
list.append(50);
list.append(60);
list.print(); // 30 20 10 40 50 60

list.insert(15, 2);
list.print(); // 30 20 15 10 40 50 60

console.log(list.removeFrom(10)); // null, nothing at index 10
console.log(list.removeFrom(0)); // 30
list.print(); // 20 15 10 40 50 60
console.log(list.removeFrom(2)); // 10
list.print(); // 20 15 40 50 60
console.log(list.getSize()); // 5

console.log(list.removeValue(40)); // 40
list.print(); // 20 15 50 60

console.log(list.search(20)); // 0
console.log(list.search(50)); // 2
console.log(list.search(60)); // 3

list.reverse();
list.print(); // 60 50 15 20

//! Linked List with Tail
//! ===============================================================================================
class NodeTail {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListTail {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new NodeTail(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new NodeTail(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}
const listTail = new LinkedListTail();
console.log("List is empty? ", listTail.isEmpty()); // List is empty? True
console.log("List size: ", listTail.getSize()); // List size: 0
listTail.print(); // List is empty

listTail.append(10);
listTail.append(20);
listTail.append(30);
listTail.prepend(40);
listTail.print(); // 40 10 20 30
console.log("List size ", listTail.getSize()); // 4

listTail.removeFromFront();
listTail.print(); // 10 20 30

listTail.removeFromEnd();
listTail.print(); // 10 20

//! Double Linked List
//! ===============================================================================================
// TODO: Figure this out on my own i guess

//! Circular Linked List
//! ===============================================================================================
// TODO: Figure this one out too
