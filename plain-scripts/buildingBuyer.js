setInterval(function () {
  for (var i in Game.Objects) {
    var building = Game.Objects[i];
    if (Game.cookies >= building.getPrice()) {
      building.buy();
    }
  }
}, 25);
