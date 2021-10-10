
// --------------------BUILDING ONE---------------------------------------------------

document.getElementById("buildingOne").addEventListener("click", function(clickEvent){
    if(AldiCount >= BuildingOnePrice){
        AldiCount -= BuildingOnePrice;
        apps+=BuildingOneApps;
        BuildingOneAmount++;
        BuildingAmount = BuildingOneAmount;
        BuildingPriceIncreaser = 1.15 ** BuildingAmount;
        BuildingOnePrice = 10;
        BuildingOnePrice = BuildingOnePrice * BuildingPriceIncreaser;
            DisplayBuildingPrice = BuildingText1PriceTag;
            DisplayBuildingPrice.innerHTML = BuildingOnePrice.toFixed(1);
        
        }
});

// --------------------BUILDING ONE---------------------------------------------------

// --------------------BUILDING TWO---------------------------------------------------

document.getElementById("buildingTwo").addEventListener("click", function(clickEvent){
    if(AldiCount >= BuildingTwoPrice){
        AldiCount -= BuildingTwoPrice;
        apps+=BuildingTwoApps;
        BuildingTwoAmount++;
        BuildingAmount = BuildingTwoAmount;
        BuildingPriceIncreaser = 1.15 ** BuildingAmount;
        BuildingTwoPrice = 100;
        BuildingTwoPrice = BuildingTwoPrice * BuildingPriceIncreaser;
            DisplayBuildingPrice = BuildingText2PriceTag;
            DisplayBuildingPrice.innerHTML = BuildingTwoPrice.toFixed(1);
        
        }
});

// --------------------BUILDING TWO---------------------------------------------------
