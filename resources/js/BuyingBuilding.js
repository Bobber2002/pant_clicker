document.getElementById("building").addEventListener("click", function(clickEvent){
    if(AldiCount >= BuildingOnePrice){
        AldiCount -= BuildingOnePrice;
        apps+=BuildingOneApps;
        BuildingOneAmount++;
        BuildingAmount = BuildingOneAmount;
        BuildingPriceIncreaser = 1.15 ** BuildingAmount;
        BuildingOnePrice = 10;
        BuildingOnePrice = BuildingOnePrice * BuildingPriceIncreaser;
        }
});


