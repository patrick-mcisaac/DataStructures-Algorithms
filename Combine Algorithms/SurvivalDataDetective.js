function findFirstBelowThreshold(thickness, minSafe){
    let lo = 0, hi = thickness.length - 1
    let ans = Infinity
    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo) / 2)

        if(thickness[mid] < minSafe){
            ans = Math.min(ans, mid)
            hi = mid - 1
        }

        if(thickness[mid] >= minSafe){
            lo = mid + 1
        }
    }

    return ans === Infinity? -1 : ans
    
}

console.log(findFirstBelowThreshold([12, 11, 9, 9, 7, 7, 4, 2], 1))

function maxSumSubarray(arr, k){
    let maxSum = 0
    let windowSum = 0
    let left = 0
    for(let right = 0; right < arr.length; right++){
        windowSum += arr[right]
        if(right>=k){
            maxSum = Math.max(maxSum,windowSum)
            windowSum -=arr[left]
            left++
        }
    }
    return maxSum
}

console.log(maxSumSubarray([12, 11, 9, 9, 7, 7, 4, 2], 0))

function findDuplicates(arr) { 
    const duplicates = []; 
    for (let i = 0; i < arr.length; i++) { 
        for (let j = i + 1; j < arr.length; j++) { 
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                 duplicates.push(arr[i]); 
            } 
        } 
    }
    return duplicates;
}