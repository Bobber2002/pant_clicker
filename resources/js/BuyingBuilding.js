document.getElementById("building").addEventListener("click", function(clickEvent){
    if(AldiCount >= BuildingOnePrice){
        AldiCount -= BuildingOnePrice;

        display.innerHTML = AldiCountShown;

        apps+=BuildingOneApps;
        
        BuildingOneAmount++;
        
            console.log("BuildingOneAmount =", BuildingOneAmount);
        
        BuildingAmount = BuildingOneAmount;
        
            console.log("BuildingAmount =", BuildingAmount);
            
        BuildingPriceIncreaser = 1.15 ** BuildingAmount;
        
            console.log("BuildingPriceIncreaser =", BuildingPriceIncreaser);

        BuildingOnePrice = 10;
        
        BuildingOnePrice = BuildingOnePrice * BuildingPriceIncreaser;
        
            console.log("BuildingOnePrice =", BuildingOnePrice);

            DisplayBuildingPrice.innerHTML = BuildingOnePrice.toFixed(1);
        
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
