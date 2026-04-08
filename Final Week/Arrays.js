/*
Challenge 1: Arrays — iterate, add, remove

Implement the following functions:

1. sumOfSquares(nums) - return the sum of x^2 for each x in nums (no Array.prototype.map)
2. insertAt(arr, index, value) - returns NEW array with value inserted at index
3. removeAt(arr, index) - returns NEW array without the element at index

Time Complexity Questions:
- Why are insertAt/removeAt O(n)?
- Why are push/pop O(1) but shift/unshift O(n)?
*/

function sumOfSquares(nums) {
  // return the sum of x^2 for each x in nums (no Array.prototype.map)
  // Your code here
  let sum = 0
  for(const num of nums){
    sum += num**2
  }
  return sum
}

function insertAt(arr, index, value) {
  // returns NEW array with value inserted at index
  // Your code here
  const newArr = []
  for(let i = 0; i < arr.length; i++){
    if(i === index){
      newArr.push(value)
    }
    newArr.push(arr[i])
  }

  return newArr
}

function removeAt(arr, index) {
  // returns NEW array without the element at index
  // Your code here
  const newArr = []
  for(let i = 0; i < arr.length; i++){
    if(i === index){
      continue
    }
    newArr.push(arr[i])
  }
  return newArr
}

console.log(sumOfSquares([3,2,5]))
console.log(insertAt([1,2,3,4,5],2,10))
console.log(removeAt([1,2,3,4,5],2))
