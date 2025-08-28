let prestigeLevel = 1
setInterval(function () {
	if (Game.ascensionValue === 0) {
	  Game.ClickCookie();//automatically clicks the big cookie
	
		//automatically buys upgrades
	  for (var i in Game.Upgrades) {
	    var upgrade = Game.Upgrades[i];
	      if (upgrade.unlocked && !upgrade.bought && Game.cookies >= upgrade.getPrice()) {
	        upgrade.buy();
	      }
	  }
	
		//automatically buys buildings
	  for (var i in Game.Objects) {
	    var building = Game.Objects[i];
	    if (Game.cookies >= building.getPrice()) {
	      building.buy();
	    }
	  }
	
		//automatically clicks golden cookies and other shines
		Game.shimmers.forEach(function(shimmer) { shimmer.pop(); });
	
		//automatically collects sugar lumps when ripe
		Game.clickLump();
	
		//automatically upgrades buildings with sugar lumps
		for (var i = 0; i < Game.ObjectsById.length; i++) {
	    var building = Game.ObjectsById[i];
	    if (building.level < 10 && building.level <= Game.lumps) {
	      if (typeof building.levelUp !== 'undefined') {
	        building.levelUp();
	      }
	    }
	  }

		//automatically ascends when you get at least one prestige level
		if (((Game.cookiesEarned/1000000000000)**(1/3))**(1/2) >= prestigeLevel) {
      Game.Ascend(true);
      prestigeLevel ++;
    }
	}
}, 25);
