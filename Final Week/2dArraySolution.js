function countNeighbors(grid, r, c, target) {
  // Count 8-direction neighbors that match a target value
  const dirs = [-1, 0, 1];
  let count = 0;
  
  for (const dr of dirs) {
    for (const dc of dirs) {
      if (dr === 0 && dc === 0) continue; // Skip the center cell
      
      const nr = r + dr;
      const nc = c + dc;
      
      // Check bounds
      if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length) {
        if (grid[nr][nc] === target) {
          count++;
        }
      }
    }
  }
  
  return count;
}
function neighborCountGrid(grid, target) {
  // For each cell, set it to the number of matching neighbors (new grid)
  const rows = grid.length;
  const cols = grid[0].length;
  const out = Array.from({length: rows}, () => Array(cols).fill(0));
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      out[r][c] = countNeighbors(grid, r, c, target);
    }
  }
  
  return out;
}
// Runtime: O(R*C) since each cell looks at constant 8 neighbors.