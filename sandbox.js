window.onload = function() {
  var map = new Tilemap("assets/terrain.png",32,32)

  var canvas = document.getElementById("canvas")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  var context = canvas.getContext("2d")


function Tilemap(image,tileWidth,tileHeight) {
  this.img = new Image()
  this.img.src = image

  this.tileWidth = tileWidth
  this.tileHeight = tileHeight

  console.log(this.img.width)

  this.tiles = []
  for(var i = 0; i < this.img.width; i+=tileWidth) {
    for(var j = 0; j < this.img.height; j+=tileHeight) {
      this.tiles.push(new Tile(i,j))
    }
  }
  console.log(this.tiles)
}

function Tile(x,y) {
  this.x = x
  this.y = y
}
