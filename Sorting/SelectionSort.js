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

const selectionSort = (albums) => {
    /* 
    outer loop goes to second last index (i)
        track a min index = i

        inner loop goes from outter loop start + 1 (j)
            if array[j] < array[minIndex]
                min index = j
        

        if min index is not i, then swap i with min index
     */

        const n = albums.length

        for (let i = 0; i < n -1; i++){

            let minIndex = i
            
            for(let j = i+1; j < n; j++){
                if(albums[j] < albums[minIndex]){
                    minIndex = j
                }
            }

            if(minIndex !== i){
                [albums[i], albums[minIndex]] = [albums[minIndex], albums[i]]
            }
        }

        return albums;
}

console.log(selectionSort(smallCollection))