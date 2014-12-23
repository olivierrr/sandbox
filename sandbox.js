window.onload = function() {
  var tilemap = new Image()
  tilemap.src = "assets/terrain.png"

  var canvas = document.getElementById("canvas")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  var context = canvas.getContext("2d")

  context.drawImage(tilemap,0,0)
}
