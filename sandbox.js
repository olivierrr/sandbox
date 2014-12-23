window.onload = function() {
  var map = new Tilemap("assets/terrain.png",32,32,render)
}

function render(map) {
  var k = Math.floor(Math.random() * map.tiles.length)

  console.log(k)
  console.log(map.tiles[k])

  var canvas = document.getElementById("canvas")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  var context = canvas.getContext("2d")

  context.drawImage(map.img,map.tiles[k].x,map.tiles[k].y,
                                map.tileWidth,map.tileHeight,
                            0,0,map.tileWidth,map.tileHeight)
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
