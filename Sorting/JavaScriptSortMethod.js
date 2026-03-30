/* 
sorts in place


comparison functions

takes 2 arguments (a, b) and returns
    a negative value if a should be before b
    a positive if a should be after b
    Zero if they are equal in terms of sort order



you can sort by multiple criteria
by checking if it is === 0  ie by artist, then by release year

collection.sort((a,b) => {
    // First compare by artist
    const artistComparison = a.artist.localeCompare(b.artist)
    if(artistComparison !== 0){
        return artistComparison
    }
    return a.releaseYear - b.releaseYear
    })

you can check if something is null and return 1 or -1 etc.
 */

const vinylCollection = [
  {
    title: "Abbey Road",
    artist: "The Beatles",
    releaseYear: 1969,
    price: 24.99,
    condition: "mint"
  },
  {
    title: "Dark Side of the Moon",
    artist: "Pink Floyd",
    releaseYear: 1973,
    price: 29.99,
    condition: "very good"
  },
  {
    title: "Thriller",
    artist: "Michael Jackson",
    releaseYear: 1982,
    price: 19.99,
    condition: "good"
  }
];

function sortByYear(collection) {
  //return the appropriate value
  //tip: the result of subtraction will be the positive, negative or zero value we need
  collection.sort((a,b) => b.releaseYear - a.releaseYear)
  return collection
  
}

// Sort by artist name
function sortByArtist(collection) {
  //the string method localeCompare() is handy for typical alphabetical sorting, and facilitates internationalization
  //look it up if you need to reference how it works
  collection.sort((a,b) => a.artist.localeCompare(b.artist))
  return collection ;
}

// Sort by condition (custom order)
function sortByCondition(collection) {
  //we can define whatever logic we want to compare on whatever fields. 
  // Use this object to compare between conditions, which are stored as strings
  const conditionOrder = { "mint": 1, "very good": 2, "good": 3, "fair": 4 };

  collection.sort((a,b) => {
    return conditionOrder[a.condition] - conditionOrder[b.condition]
  })
  return collection;
}



////// EXERCISE 2: complete these functions

//  Case-Insensitive Artist Sorting: Handle artists with different capitalization
function sortByArtistIgnoreCase(collection) {
  //use a comparison function that makes both strings lower case before comparing
  collection.sort((a,b) => {
    return a.artist.toLowerCase().localeCompare(b.artist.toLowerCase())
  })
  return collection
}

// Custom Business Logic: Sort by "popularity" - a combination of price and condition
function sortByPopularity(collection) {
  const conditionMultiplier = { "mint": 1.2, "very good": 1.0, "good": 0.8, "fair": 0.6 };
  
  collection.sort((a, b) => {
    //multiply the value for the condition by price to get the value for popularity and compare those
    let aValue = a.price * conditionMultiplier[a.condition]
    let bValue = b.price * conditionMultiplier[b.condition]
    return bValue - aValue
  });
  return collection
}


sortByPopularity(vinylCollection)