
(function loop() {
  setTimeout(function () {
    AldiCount += apps/10;
    var perSecond = document.getElementById("perSecondCounter")  
        perSecond.innerHTML = apps.toFixed(1);
        document.title=(AldiCount).toFixed()+' Aldi points - Aldi Clicker';
    loop()
  }, 100); 
}());
