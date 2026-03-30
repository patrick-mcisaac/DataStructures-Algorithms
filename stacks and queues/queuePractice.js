class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
    this.capacity = 100;
  }

  enqueue(item) {
    this.items[this.rear] = item;
    this.rear = (this.rear + 1) % this.capacity;
  }

  dequeue() {
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    return item;
  }

  peek() {
    return this.items[this.front];
  }
}

const newQ = new Queue();

newQ.enqueue(3);
newQ.enqueue(5);
newQ.dequeue();
console.log(newQ.peek());
