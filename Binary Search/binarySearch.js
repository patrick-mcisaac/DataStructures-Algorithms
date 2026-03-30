const nums = [ 1,2,3,4,5,6,7,8,9,10]

const binarySearch = (arr, target) => {
    
    let left = 0
    let right = arr.length

    while (left < right){
        let mid = Math.floor(left + (right - left) / 2)

        if(arr[mid] === target){
            return `Found target ${target} at ${mid}`
        }
        if(arr[mid]< target){
            left = mid + 1
        }
        if(arr[mid] > target){
            right = mid - 1  
        }
    }
    return `${target} Not Found`
}

console.log(binarySearch(nums, 9))