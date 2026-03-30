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

const bubbleSort = (albums) => {
    const n = albums.length

    /* 
    outer loop tracks times through loop

        inner loop starts at 0 and goes till last index - i
            if next is bigger, then swap
    */
   for(let i = 0; i < n; i++){
    let swapped = false

    for(let j = 0; j < n - i -1; j++){
        if(albums[j] > albums[j+1]){
            [albums[j], albums[j+1]] = [albums[j+1], albums[j]]
            swapped = true
        }
    }

    if(!swapped){
        break;
    }
   }
   return albums
}

bubbleSort(smallCollection)

