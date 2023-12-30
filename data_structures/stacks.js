//! Stack
//! ===============================================================================================
// Last In First Out (LIFO)
// Uses push and pop

//! Stack using a linked list
//! ===============================================================================================
class LinkedListStack {
  constructor() {
    this.list = new LinkedListTail();
  }
  push(value) {
    this.list.prepend(value);
  }
  pop() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}
const stackList = new LinkedListStack();
console.log(stackList.isEmpty()); // True
stackList.push(20);
stackList.push(10);
stackList.push(30);
console.log(stackList.getSize()); // 3
stackList.print(); // 30 10 20
console.log(stackList.pop()); // 30 is removed from the 'top' of the stack
console.log(stackList.peek()); // 10 is at the top now
