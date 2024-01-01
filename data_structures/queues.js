//! Queue
//! ===============================================================================================
// First In First Out (FIFO)

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(el) {
    this.items.push(el);
  }
  dequeue(el) {
    return this.items.shift(el);
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty()); // true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size()); // 3
queue.print(); // 10, 20, 30
console.log(queue.dequeue()); // 10 (was removed from front)
console.log(queue.peek()); // 20 (shows 20 because 10 was removed)


//! Optimized Queue
//! ===============================================================================================

class QueueOpt {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueue(el) {
    this.items[this.rear] = el;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}


//! Priority Queue
//! ===============================================================================================
// TODO: Further Learning


const queueOpt = new Queue();
console.log(queueOpt.isEmpty()); // true
queueOpt.enqueue(10);
queueOpt.enqueue(20);
queueOpt.enqueue(30);
console.log(queueOpt.size()); // 3
queueOpt.print(); // {'0': 10, '1': 20, '2': 30}
console.log(queueOpt.dequeue()); // 10 (was removed from front)
console.log(queueOpt.peek()); // 20 (shows 20 because 10 was removed)


//! Circular Queue
//! ===============================================================================================
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1; // Means it is not pointing at any position in the queue
    this.front = -1;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  enqueue(el) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = el;
      this.currentLength += 1;
      // Check to see if the front pointer is pointing at anything, if it equals -1 then set it to the same as the rear because there is only one item in the queue
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const circularQueue = new CircularQueue(5);
console.log(circularQueue.isEmpty()); // True
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);
console.log(circularQueue.isFull()); // True - 10 20 30 40 50
console.log(circularQueue.dequeue()); // 10 - removes 10 from the queue
console.log(circularQueue.peek()); // 20
circularQueue.print(); // 20 30 40 50
circularQueue.enqueue(60);
// 20 30 40 50 60 - 60 is technically at the 0 position in the queue but it was added in last and the front pointer is at position 1
circularQueue.print();

