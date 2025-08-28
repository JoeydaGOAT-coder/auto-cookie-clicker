let prestigeLevel = 1;
setInterval(function () {
  if (Game.ascensionMode === 0) {
    if (((Game.cookiesEarned/1000000000000)**(1/3))**(1/2) === prestigeLevel) {
      Game.Ascend(true);
      prestigeLevel ++
    }
  }
}, 25);
