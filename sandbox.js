window.onload = function() {
  var map = new Tilemap("assets/terrain.png",32,32,render)
}

function render(map) {
//  var k = Math.floor(Math.random() * map.tiles.length)

//  console.log(k)
//  console.log(map.tiles[k])

  var terrain = {'dirt':5,'grass':11}

  var chunk = new Chunk(10,terrain.dirt)

  console.log(terrain.dirt)

  var canvas = document.getElementById("canvas")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  var context = canvas.getContext("2d")

  var k = 0
  var l = 0

  for(var k = 0; k < chunk.tile.length; k++) {
    for(var l = 0; l < chunk.tile[k].length; l++) {
      context.drawImage(map.img,
                        map.tiles[chunk.terrain].x,
                        map.tiles[chunk.terrain].y,
                        map.tileWidth,
                        map.tileHeight,
                        5 + (map.tileWidth + 5)* l,
                        5 + (map.tileHeight + 5) * k,
                        map.tileWidth,
                        map.tileHeight)
    }
  }
}

function Tilemap(image,tileWidth,tileHeight,callback) {
  this.img = new Image()

  this.tileWidth = tileWidth
  this.tileHeight = tileHeight

  this.img.onload = function() {
    this.tiles = []
    for(var i = 0; i < this.img.width; i+=tileWidth) {
      for(var j = 0; j < this.img.height; j+=tileHeight) {
        this.tiles.push(new Tile(i,j))
      }
    }
    callback(this)
  }.bind(this)

  this.img.src = image
}

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
