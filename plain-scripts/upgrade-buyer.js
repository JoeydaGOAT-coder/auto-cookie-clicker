setInterval(function () {
  for (var i in Game.Upgrades) {
    var upgrade = Game.Upgrades[i];
    if (upgrade.unlocked && !upgrade.bought && Game.cookies >= upgrade.getPrice()) {
      upgrade.buy();
    }
  }
}, 25);
