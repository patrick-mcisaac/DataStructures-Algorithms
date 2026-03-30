const array = [1,2,3,3,3,3,4,4,4,5,5,5,5,5,6,6,6]

const findFirst = (array, target) => {
    let left = 0
    let right = array.length - 1

    let first = -1

    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2)

        if(array[mid] === target){
            first = mid
            right = mid - 1
        }
        if(array[mid] > target){
            right = mid - 1
        }
        if (array[mid] < target){
            left = mid + 1
        }
    }
    return first
}

const findLast = (array, target) => {
    let left = 0
    let right = array.length - 1

    let last = -1

    while(left <= right){
        let mid = Math.floor(left + (right-left)/2)
        if(array[mid] === target){
            last = mid
            left = mid + 1
        }
        if(array[mid] > target){
            right = mid - 1
        }
        if (array[mid] < target){
            left = mid + 1
        }
    }
    return last
}

const findAllCopies = (arr, target) => {
    /* 
    implement binary search to find first target

    then implement to find last target

    return an array of all copies
     */

    const first = findFirst(arr,target)
    if(first === -1) return []
    const last = findLast(arr,target)

    const allCopies = arr.slice(first, last + 1)
    return allCopies


}

console.log(findAllCopies(array, 4))