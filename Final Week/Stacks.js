/*
Challenge 6: Stack — use it to reverse

Use the provided Stack class to implement string and array reversal.

The Stack class has these methods:
- push(x) - add element to top
- pop() - remove and return top element
- peek() - return top element without removing
- size - get number of elements
*/

// ✅ Provided Stack implementation — do NOT modify
class Stack{
  constructor(){ this._a=[]; }
  push(x){ this._a.push(x); }
  pop(){ return this._a.pop(); }
  peek(){ return this._a[this._a.length-1]; }
  get size(){ return this._a.length; }
}

// TODO: Implement using the provided Stack
function reverseStringWithStack(s){
  // Use Stack to reverse and return a new string
  // Your code here

  const stack = new Stack()
  for(let i = 0; i < s.length; i ++){
    stack.push(s[i])
  }
  let string = ""
  while(stack.size > 0){
    string += stack.pop()
  }
  return string
}

function reverseArrayWithStack(arr){
  // Use Stack to return a NEW reversed array (do not mutate input)
  // Your code here
  const stack = new Stack()

  for(const item of arr){
    stack.push(item)
  }
  const newArr = []
  while(stack.size > 0){
    newArr.push(stack.pop())
  }
  return newArr
}