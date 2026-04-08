/*
Challenge 5: Map & Set — frequency & dedup

Implement the following functions:

1. wordCount(text) - Return a Map of word -> count (case-insensitive, letters only)
2. hasDuplicate(arr) - Return true if array has any duplicate value (use Set)

Use Map for frequency counting and Set for duplicate detection.
*/

function wordCount(text) {
  // Return a Map of word -> count (case-insensitive, letters only)
  // Use Map
  // Your code here
  /* 
  split the text into words
  define a new map

  loop over the split array
   */

 

  const arr = text.match(/[a-zA-Z]\w+/g)
  const map = new Map()

  if(arr?.length > 0){

  for(const word of arr){
    if(map.has(word.toLowerCase())){
        map.set(word.toLowerCase(), map.get(word.toLowerCase())+ 1)
    }
    else{
        map.set(word.toLowerCase(), 1)
    }
  }
  }
  return map
}

function hasDuplicate(arr) {
  // Return true if array has any duplicate value (use Set)
  // Your code here
  /* 
  define a set
  loop over the array
    if set already has it
      return true
    else 
      add to set
  return false
   */

  if(!arr) return false

  const set = new Set()
  for( const item of arr){
    if(set.has(item)){
      return true
    }
    set.add(item)
  }
  
  return false
}

wordCount('Hello, World! World')