var BuildingOnePrice = 10;
var apps = 0;

document.getElementById("building").addEventListener("click", function(clickEvent){
    if(AldiCount >= BuildingOnePrice){
            AldiCount -= BuildingOnePrice;
            display.innerHTML = AldiCount;
            apps++;
        }
});

(function loop() {
    setTimeout(function () {
        AldiCount += apps;
        display.innerHTML = AldiCount;      
      loop()
    }, 1000); 
  }());
