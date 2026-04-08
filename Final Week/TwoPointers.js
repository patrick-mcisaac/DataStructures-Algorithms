/*
Challenge 4: Two Pointers — pair sum in sorted array

Given a sorted array and target, return true if any pair sums to target.

Use two pointers technique:
- Start with left=0, right=length-1
- If sum equals target, return true
- If sum < target, move left pointer right
- If sum > target, move right pointer left
*/

function hasPairWithSum(sortedNums, target) {
  // two pointers: left, right
  // Your code here
  let left = 0
  let right = sortedNums.length - 1

  while(left < right){
    const sum = sortedNums[left] + sortedNums[right]

    if(sum === target){
        return true
    }else if(sum < target){
        left++
    }else if(sum > target){
        right--
    }
  }
  return false
}