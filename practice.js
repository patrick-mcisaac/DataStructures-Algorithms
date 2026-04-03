function countSubarraysWithSumAndMaxAtMost(nums, k, M) {
    // Write your code here
    // using 2 pointers and sliding window
    // create count variable
    // loop through array and get sum of window
    // if sum === k and if all are less than or equal to M
    // if left is negative move it forward?
    // increment count
    
    
    // count var
    
    // for left = 0 loop
        // sum var
        // right = left
        
        // while loop checking nums[right] is <= M and less than nums length
            // add nums[right] to sum
            // if sum is target (k)
                // increment count 
        // slide right
    
    // return count
    let count = 0

    for(let left = 0; left < nums.length; left ++){
        let sum = 0
        let right = left

        while( right < nums.length && nums[right] <= M){
            sum+=nums[right]
            if(sum === k){
                count++
            }
            right++
        }
    }
    return count

}

console.log(countSubarraysWithSumAndMaxAtMost([1,2,1,2],3,5))

/* 

sum = 3
count = 2
[-1,3,1]
    l
    r
for loop over left
slide right till you find greater than max digit or end, 
every time sum = target add to count

*/