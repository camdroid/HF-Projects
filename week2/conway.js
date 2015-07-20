checkBoundsAndLive = function(grid, row, col) {
  if(row >= 0 && row < grid.length) {
    if(col >= 0 && col < grid[0].length) {
      if(grid[row][col] === '*') {
        return 1;
      }
    }
  }
  return 0;
};

neighborCount = function(grid, row, col) {
  var count = 0;
  for(var i=row-1; i<=row+1; i++) {
    for(var j=col-1; j<=col+1; j++) {
      if(i===row && j === col) continue;
      count += checkBoundsAndLive(grid, i, j);
    }
  }

  return count;
};

cellLives = function(grid, row, col) {
  var neighbors = neighborCount(grid, row, col);
  if(grid[row][col] === '*') { //Cell is alive
    if(neighbors === 2 || neighbors === 3) {
      return true;
    }
  } else { //Cell is dead
    if(neighbors === 3) {
      return true;
    }
  }
  return false;
}

initGrid = function(length, width) {
  var newGrid = new Array(length);
  for(var i=0; i<length; i++) {
    newGrid[i] = new Array(width);
  }
  return newGrid;
}

/*printGrid = function(grid) {
  var str = '';
  console.log('');
  for(var i=0; i<grid.length; i++) {
    for(var j=0; j<grid[0].length; j++) {
      str += grid[i][j];
    }
    console.log(str);
  }
  console.log('');
}*/

conwayIteration = function(grid) {
  var newGrid = initGrid(grid.length, grid[0].length);
  
  for(var i=0; i<grid.length; i++) {
    for(var j=0; j<grid[0].length; j++) {
      if(cellLives(grid, i, j)) {
        newGrid[i][j] = '*';
      } else {
        newGrid[i][j] = '.';
      }
    }
  }
  return newGrid;
}

conway = function(grid) {
  var count = 0;
  
  while(count++ < 10) {
    //printGrid(grid);
    console.log(grid);
    console.log('');
    var newGrid = conwayIteration(grid);
    grid = newGrid;
  }
}