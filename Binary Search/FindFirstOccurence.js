const array = [ 1,2,4,4,4,4,5,5,5,5,5,6,7,8]

const findFirst = (arr, target) => {
    /*
    implement a binary search to find the target.
    when found, keep searching left to see if there are more
     */

    let left = 0
    let right = arr.length - 1
    let first = -1

    while (left <= right){
        let mid = Math.floor(left + (right - left) / 2)
        if(arr[mid] === target){
            first = mid
            right = mid - 1
        }
        if (arr[mid] > target){
            right = mid - 1
        }
        if(arr[mid] < target){
            left = mid + 1
        }
    }
    return first
}

console.log(findFirst(array, 4))