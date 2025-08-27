setInterval(function () {
  for (var i = 0; i < Game.ObjectsById.length; i++) {
    var building = Game.ObjectsById[i];
    if (building.level < 10 && building.level <= Game.lumps) {
      if (typeof building.levelUp !== 'undefined') {
        building.levelUp();
      }
    }
  }
}, 25);
