const arr = [ 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]

const findInsertionPoint = (arr, newItem) => {
    let left = 0
    let right = arr.length

    while(left <= right){
        let mid = Math.floor(left + ( right - left ) / 2)

        if(arr[mid] < newItem){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return left
}

console.log(findInsertionPoint(arr, 3))