
window.renderer = (function(){

  PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST
  PIXI.stage = new PIXI.Stage()
  PIXI.renderer = PIXI.autoDetectRenderer()

  function onresize(){
    PIXI.renderer.resize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', onresize)
  document.querySelector('#canvas-area').appendChild(PIXI.renderer.view)
  onresize()

  var tilemap = new Tilemap(PIXI.renderer)
  tilemap.missingTile = function(x,y){
    // tilemap.setTile(x, y, worldgen(x,y))
  }
  tilemap.interactive = true

  PIXI.stage.addChild(tilemap)

  // @todo parse xml
  // var loader = new PIXI.AssetLoader(["tiles.json"])
  // loader.onComplete = boot
  // loader.load()

  function boot(){
    var isdragging = false
      , lastmousedown = [0,0]

    tilemap.mousedown = tilemap.touchstart = function(data){
      isdragging = true
      var position = data.getLocalPosition(this.parent)
      lastmousedown[0] = position.x - this.position.x
      lastmousedown[1] = position.y - this.position.y
    }

    tilemap.mousemove = tilemap.touchmove = function(data) {
      if(isdragging){
        var position = data.getLocalPosition(this.parent)
        this.position.x = position.x - lastmousedown[0]
        this.position.y = position.y - lastmousedown[1]
      }
    }

    tilemap.mouseup = tilemap.mouseupoutside = tilemap.touchend = tilemap.touchendoutside = function(data) {
      isdragging = false
    }

    PIXI.renderer.view.addEventListener('mousewheel', onmousewheel)
    PIXI.renderer.view.addEventListener('DOMMouseScroll', onmousewheel)
    PIXI.renderer.view.addEventListener('onmousewheel', onmousewheel)
    function onmousewheel (e) {
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
      delta > 0 ? tilemap.zoomIn() : tilemap.zoomOut()
    }

    animate()
  }

  function animate(){
    requestAnimFrame(animate)
    tilemap.tick()
    PIXI.renderer.render(PIXI.stage)
  }

  return tilemap
})