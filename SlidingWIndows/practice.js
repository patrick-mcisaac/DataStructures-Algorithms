const arr = [1,3,5,2,7,4,12,3,4]

const findSmallestToTarget = (arr, target) => {

    let len = Infinity
    let start = 0
    let sum = 0
    for(let end = 0; end < arr.length; end++){
        sum += arr[end]
        while(sum > target){
            if (end - start < len) len = end - start
            sum -= arr[start]
            start++
        }
    }
    
    return len
    
}


const getAverages = (arr, period) => {
    let sum = 0
    let average = [];
    for(let i = 0; i < period; i++){
        sum+=arr[i]
    }
    average.push(sum/period)

    for(let i = 0; i < arr.length - period; i++){
        sum = sum - arr[i] + arr[i+period]
        average.push(sum/period)
    }
    return average
}

console.log(findSmallestToTarget(arr, 12))
console.log(getAverages(arr, 3))

