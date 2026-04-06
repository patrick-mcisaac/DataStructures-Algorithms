/*
Challenge 2: 2D Arrays — neighbors & updates

Implement the following functions:

1. countNeighbors(grid, r, c, target) - Count 8-direction neighbors that match a target value
2. neighborCountGrid(grid, target) - For each cell, set it to the number of matching neighbors (new grid)

grid is an array of arrays (rows)
*/

function countNeighbors(grid, r, c, target) {
  // Count 8-direction neighbors that match a target value
  // Your code here
  const dirRow = [-1, -1, 0, 1, 1, 1, 0, -1]
  const dirCol = [0, 1, 1, 1, 0, -1, -1, -1]
  let count = 0

  for(let i = 0; i < 8; i++){
    const newRow = r + dirRow[i]
    const newCol = c + dirCol[i]
    
    if(newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[0].length){
          if(grid[newRow][newCol] === target){
            count++
          }
      }
  }
  return count
}

function neighborCountGrid(grid, target) {
  // For each cell, set it to the number of matching neighbors (new grid)
  // Your code here
  const dirRow = [-1, -1, 0, 1, 1, 1, 0, -1]
  const dirCol = [0, 1, 1, 1, 0, -1, -1, -1]

  const newGrid = Array.from({length: grid.length}, () => Array(grid[0].length).fill(0) )

  for (let row = 0; row < grid.length; row++){
    for (let col = 0; col < grid[0].length; col++){
      let count = 0
      for(let i = 0; i < dirRow.length; i++){
        const newRow = row + dirRow[i]
        const newCol = col + dirCol[i]

        if(newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[0].length){
          if(grid[newRow][newCol] === target){
            count++
          }
        }
      }
      newGrid[row][col] = count
    }
  }
  return newGrid

}