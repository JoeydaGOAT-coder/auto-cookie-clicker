setInterval(function () {
  Game.ClickCookie();

  for (var i in Game.Upgrades) {
    var upgrade = Game.Upgrades[i];
      if (upgrade.unlocked && !upgrade.bought && Game.cookies >= upgrade.getPrice()) {
        upgrade.buy();
      }
  }

  for (var i in Game.Objects) {
    var building = Game.Objects[i];
    if (Game.cookies >= building.getPrice()) {
      building.buy();
    }
  }
  
	Game.shimmers.forEach(function(shimmer) { shimmer.pop(); });

	Game.clickLump();
}, 25);
