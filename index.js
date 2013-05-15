//voxel game
var createGame = require('voxel-engine')

var game = createGame({
  generate: function(x, y, z) {
    return y === 1 ? 1 : 0
  }
})

// rotate camera to look straight down
game.controls.pitchObject.rotation.x = -.5

var container = document.body
game.appendTo(container)

// have the game take over your mouse pointer when you click on it
game.setupPointerLock(container)

