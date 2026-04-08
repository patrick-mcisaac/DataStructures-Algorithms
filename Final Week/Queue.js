/*
Challenge 7: Queue — use it to build a RecentCounter

Use the provided Queue classes to implement a RecentCounter that tracks
pings in a sliding 3000ms window.

The Queue classes have these methods:
- enqueue(x) - add element to back
- dequeue() - remove and return front element  
- peek() - return front element without removing
- length - get number of elements
*/

// ✅ Provided Queue implementation — do NOT modify
class QNode{ constructor(value,next=null){ this.value=value; this.next=next; } }
class Queue{
  constructor(){ this.head=null; this.tail=null; this.length=0; }
  enqueue(x){ const n=new QNode(x); if(!this.head){this.head=this.tail=n;} else{this.tail.next=n; this.tail=n;} this.length++; }
  dequeue(){ if(!this.head) return undefined; const v=this.head.value; this.head=this.head.next; if(!this.head) this.tail=null; this.length--; return v; }
  peek(){ return this.head ? this.head.value : undefined; }
}

// TODO: Implement using the provided Queue
class RecentCounter{
  constructor(){ 
    // Your code here
    /* 
    define a new queue
     */
    this.queue = new Queue()
    this.count = 0
  }
  
  ping(t){
    // Add t, remove times < t-3000, return count in window
    // Your code here
    /* 
    enqueue t
    while first value < t - 3000
      remove first value
     */
    this.queue.enqueue(t)
    this.count++
    while(this.queue.peek() < t - 3000){
      this.queue.dequeue()
      this.count--
    }
    return this.count
  }
}