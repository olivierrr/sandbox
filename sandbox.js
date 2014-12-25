
function Tile(x,y) {
  this.x = x
  this.y = y
}

function Chunk(size,terrain) {
  this.terrain = terrain
  this.tile = Array(size)
  for(var i = 0; i < size; i++) {
    this.tile[i] = Array(size)
  }

  for(var i = 0; i < size; i++) {
    for(var j = 0; j < size; j++) {
      this.tile[i][j] = terrain
    }
  }
}
