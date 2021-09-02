var BuildingOnePrice = 10;
var BuildingOneApps = 0.1;
var apps = 0;

document.getElementById("building").addEventListener("click", function(clickEvent){
    if(AldiCount >= BuildingOnePrice){
            AldiCount -= BuildingOnePrice;
            display.innerHTML = AldiCountShown;
            apps+=BuildingOneApps;
        }
});

(function loop() {
    setTimeout(function () {
        AldiCount += apps/10;
        display.innerHTML = AldiCountShown;
      loop()
    }, 100); 
  }());

  (function Aloop() {
    setTimeout(function () {
        AldiCountShown = Math.floor(AldiCount);
      Aloop()
    }, 100); 
  }());

