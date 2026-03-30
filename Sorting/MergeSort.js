const smallCollection = [
  "Thriller",
  "Abbey Road",
  "Dark Side of the Moon",
  "Back in Black",
  "The Wall",
  "Led Zeppelin IV",
  "Rumours",
  "Hotel California",
  "Nevermind",
  "Born to Run"
];


const mergeSort = (albums) => {
    if(albums.length <= 1){
        return albums
    }

    /* 
    find the mid, then recursively call merge sort to get only one for left and right 
    create indexes for left and right
    create an empty sorted list

    while left index  < left length
    and right index < right length
        check if left[leftIndex] <= right[rightIndex]
            push left[leftIndex] to the sorted list
        else
            push right[rightIndex] to sorted list
    
    push the remaining items from left and right to sorted list

    return the sorted list
    */

    let mid = Math.floor(albums.length / 2)
    let left = mergeSort(albums.slice(0, mid))
    let right = mergeSort(albums.slice(mid))

    const sortedList = []
    let i = 0
    let j = 0

    while(i < left.length && j < right.length){
        if(left[i] <= right[j]){
            sortedList.push(left[i])
            i++
        }else{
            sortedList.push(right[j])
            j++
        }
        
    }
    sortedList.push(...left.slice(i))
    sortedList.push(...right.slice(j))
    
    return sortedList

}

console.log(mergeSort(smallCollection))