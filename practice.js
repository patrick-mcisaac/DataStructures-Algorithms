


/*
 * Complete the 'bestInGenre' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING genre as parameter.
 *
 * Base URL: https://jsonmock.hackerrank.com/api/tvseries?page=
 */


async function bestInGenre(genre) {
    // Write your code here
    /* 
    fetch the first page
    get the info for how many pages there are
    
    fetch each page
    filter the array to have only the genre i need
    find highest imdb rating with lowest name alphabetically if there is a tie
    
     */
   
    const firstResponse = await fetchPages(1)
    
    const genreArray = firstResponse.data.filter(d => d.genre === genre)
    
    for(let i = 2; i <= Number(firstResponse.total_pages); i++){
        const response = await fetchPages(i)
        const filtered = response.data.filter(d => d.genre === genre)
        genreArray.push(...filtered)
    }
    
    genreArray.sort((a,b) => {
        if(Number(b.imdb_rating) - Number(a.imdb_rating) === 0){
            a.name.localeComapre(b.name)
        }else{
            
        Number(b.imdb_rating) - Number(a.imdb_rating)
        }
        })
    
    
    return genreArray[0].name
    
    
}

async function fetchPages(page){
    const response = await fetch(`https://jsonmock.hackerrank.com/api/tvseries?page=${page}`)
    const results = await response.json()
    return results
}


 console.log(bestInGenre("Action"))