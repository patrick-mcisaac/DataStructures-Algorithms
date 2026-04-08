/*
Challenge 9: Sliding Window — max sum of size k

Return the maximum sum of any contiguous subarray of length k.

Examples:
maxSumOfSizeK([2,1,5,1,3,2], 3) => 9  // [5,1,3]
maxSumOfSizeK([2,3,4,1,5], 2) => 7    // [3,4]
maxSumOfSizeK([1], 1) => 1
maxSumOfSizeK([1,2], 3) => null        // k > array length

Use sliding window technique for O(n) time complexity.
*/

function maxSumOfSizeK(nums, k){
  // Return the maximum sum of any contiguous subarray of length k
  // Your code here

  let sum = 0

  for(let i = 0; i < k; i++){
    sum+=nums[i]
  }
  let max = sum

  for(let i = k; i < nums.length; i++){
    sum += nums[i]
    sum -= nums[i - k]
    max = Math.max(sum, max)
  }
  return max
}