// ─────────────────────────────────────────────
// Challenge 1: Voter Registration
// A polling app needs to track which users have already voted in favor of a proposal, but users can only vote once
// ─────────────────────────────────────────────

// SET
const supporters = new Set(); // your choice here

const registerSupport = (supporterName) => {
  //update supporters to include the new supporter, but not multiple times
supporters.add(supporterName)
}

const checkSupport = (supporterName) => {
  return supporters.has(supporterName)
}

const tallySupport = () => {
  return supporters.size
}

registerSupport("Angela");
registerSupport("Bryce");
registerSupport("Celia");
registerSupport("Bryce");

console.log( checkSupport("Bryce") ); //should return true
console.log( tallySupport() ); //should return 3

// ─────────────────────────────────────────────
// Challenge 2: Word Frequency Counter
//
// Count how many times each word appears in the array.
// ─────────────────────────────────────────────

// MAP

 const words = ["the", "cat", "sat", "on", "the", "mat", "the", "cat"];

const frequencies = new Map(); // what kind of data structure should we use?

// Loop through words and build up the frequency count
const calculateFrequencies = (newWords)=>{
  //set frequencies to store an int value for each of the words provided
    for(const word of newWords){
        if(!frequencies.has(word)){
            frequencies.set(word, 1)
        }
        else{
            frequencies.set(word, frequencies.get(word) + 1)
        }
    }
}

const getFrequencyOfWord = (word)=>{
  if(frequencies.has(word)){
    return frequencies.get(word)
}
}
calculateFrequencies(words)
console.log( getFrequencyOfWord("cat") ) //should return 2
console.log( getFrequencyOfWord("the") ) //should return 3

// ─────────────────────────────────────────────
// Challenge 3: Student Record
//
// Store the following info about a student. Then log that information
//  name: "Jordan", grade: 11, gpa: 3.7
// ─────────────────────────────────────────────

// Object

const student = {
    name: "Jordan",
    grade: 11,
    gpa: 3.7
}; //set this to store the information about a student

// after creating the student, log all the values individually
for(const values of Object.values(student)){
    console.log(values)
}
// ─────────────────────────────────────────────
// Challenge 4: Concert Setlist Plan
//
// A band wants to plan an upcoming concert
// ─────────────────────────────────────────────

// Array

// Start with: "opener", "crowd pleaser", "closer"
const setlist = ['opener', 'crowd pleaser', 'closer'];

// Then insert "new hit" between "crowd pleaser" and "closer"
// Then insert another "crowd pleaser" before "new hit"
// Then log the whole list 
setlist.splice(2, 0, "new hit")
setlist.splice(3,0, "crowd pleaser")
for(const song of setlist){
    console.log(song)
}