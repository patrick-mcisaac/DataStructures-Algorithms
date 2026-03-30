const arr = [ 1,2,3,4,5,5,5,5,6,7,8,9]

const findInRange = (arr, min, max) => {
   /* 
   use insertion point search to find min and max insertion
    */

   const minIndex = findInsertionPoint(arr, min)
   const maxIndex = findInsertionPoint(arr, max + 1)

   return arr.slice(minIndex,maxIndex)

}

const findInsertionPoint = (arr, target) => {
    let left = 0
    let right = arr.length

    while (left <= right){
        let mid = Math.floor(left + (right - left) / 2)

        if(arr[mid] < target){
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    return left
}

console.log(findInRange(arr, 2, 4))