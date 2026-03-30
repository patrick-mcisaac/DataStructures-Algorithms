// Complete Stack implementation with all methods

class Stack {
  constructor() {
    this.items = [];
  } // Add an item to the top of the stack

  push(item) {
    this.items.push(item);
    return this.items.length;
  } // Remove and return the top item from the stack
  // Throw an error if stack is empty

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items.pop();
  } // Return the top item without removing it
  // Throw an error if stack is empty

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items[this.items.length - 1];
  } // Return true if stack is empty, false otherwise

  isEmpty() {
    return this.items.length === 0;
  } // Return the number of items in the stack

  size() {
    return this.items.length;
  }
}

// Complete Queue implementation

class Queue {
  constructor() {
    this.items = [];
  } // Add an item to the back of the queue

  enqueue(item) {
    this.items.push(item);
  } // Remove and return the front item from the queue
  // Return null if queue is empty

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  } // Return the front item without removing it
  // Return null if queue is empty

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  } // Return true if queue is empty, false otherwise

  isEmpty() {
    return this.items.length === 0;
  } // Return the number of items in the queue

  size() {
    return this.items.length;
  }
}

// A busy IT help desk receives support requests throughout the day.
// Requests should be handled fairly — the first person to submit
// a request should be the first person to receive help.
//
// Your task:
//
//   Write a function called `processHelpDesk` that:
//
//   1. Accepts an array of names representing people submitting
//      requests, in the order they arrived.
//
//   2. Uses either a Stack or a Queue (from implementation.js)
//      to process those requests.
//
//   3. Removes and handles each request one at a time, logging:
//        "Now helping: <name>"
//      until all requests have been handled.
//
//   4. Logs "Help desk closed. All done!" when finished.
//
// Example input:
//   ["Alice", "Bob", "Carol", "Dave"]
//
// Expected output:
//   Now helping: Alice
//   Now helping: Bob
//   Now helping: Carol
//   Now helping: Dave
//   Help desk closed. All done!
//
// Think carefully: which data structure gives you the correct
// order of service, and why?
// ============================================================

// Your code here:

function processHelpDesk(names) {
  const myQ = new Queue();
  for (const name of names) {
    myQ.enqueue(name);
  }
  while (myQ.size() > 0) {
    const removed = myQ.dequeue();
    console.log(`Now helping: ${removed}`);
  }
  console.log("Help desk closed. All done!");
}

// Test it:
processHelpDesk(["Alice", "Bob", "Carol", "Dave"]);
