var BuildingOnePrice = 10;
var aps = 0;

document.getElementById("building").addEventListener("click", function(clickEvent){
    if(AldiCount >= BuildingOnePrice){
            AldiCount -= BuildingOnePrice;
            display.innerHTML = AldiCount;
            aps++;
        }
});

(function loop() {
    setTimeout(function () {
        AldiCount += aps;
        display.innerHTML = AldiCount;      
      loop()
    }, 1000); 
  }());
