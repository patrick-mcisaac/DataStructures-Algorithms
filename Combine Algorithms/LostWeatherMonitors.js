/* 
⏱️ Challenge: Collect Weather Monitors with a Stack
🎯 The Problem
You're given a 2D grid with lost weather monitors (> 0) and empty areas (0).

You start from a given (row, col) position.

Follow the search moves (U, D, L, R).

Every time you find a monitor, push its serial number onto a stack.

At the end, return monitor serial numbers in the order you found them.
*/

function collectWeatherMonitors(grid, startRow, startCol, moves){
    const rows = grid.length
    const cols = grid[0].length

    const stack = []
    let row = startRow
    let col = startCol

    if(row >= 0 &&
        row < rows &&
        col >= 0 &&
        col < cols
    ){
        if(grid[row][col] > 0){
            stack.push(grid[row][col])
        }
    }

    for(const move of moves){
        switch(move.toLowerCase()){
            case 'u':
                row --
                break
            case 'd':
                row ++
                break
            case 'r':
                col++
                break
            case 'l':
                col--
                break
            default:
                break
        }
        if( row >= 0 &&
        row < rows &&
        col >= 0 &&
        col < cols
    ){
        if(grid[row][col] > 0){
            stack.push(grid[row][col])
        }
    }
    }
    return stack
    
}

collectWeatherMonitors([
  [0, 105, 0],
  [203, 0, 307],
  [0, 402, 0]
],
1,
0,
 ['U', 'R', 'D', 'R'])

/* 

[u,d,l,r]
get start position info first
loop through moves
check calculate new position based off moves
check if in bounds, then if it has a number > 0
*/