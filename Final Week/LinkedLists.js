/*
Challenge 3: Linked List — build, iterate, add, remove

Implement a singly linked list with the following:

1. Node class - constructor(value, next=null)
2. LinkedList class with:
   - constructor() - initialize head, tail, length
   - append(value) - O(1) with tail
   - remove(value) - remove first node with matching value; return true if removed
   - forEach(fn) - call fn(value, index) for each node
*/

class Node {
  constructor(value, next = null) {
    // Your code here
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null
    this.tail = null
    this.length = 0
  }
  
  append(value) {
    // O(1) with tail
    // Your code here
       const node = new Node(value)
    if(!this.head){
      this.head = node
      this.tail = node
    }
    else{
      this.tail.next = node
      this.tail = node
    }
    this.length++
  }
  
  remove(value) {
    // remove first node with matching value; return true if removed
    // Your code here
    /* 
    
    */
   let current = this.head
   if(current.value === value){
    this.head = current.next
    this.length --
    return true
   }
   else{

       while(current.next !== null){
           if(current.next.value === value){
               current.next = current.next.next
               this.length --
               return true
            }
            current = current.next
        }
    }
    return false
    
  }
  
  forEach(fn) {
    // call fn(value, index) for each node
    // Your code here
  }
}