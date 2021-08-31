var BuildingOnePrice = 10;

document.getElementById("building").addEventListener("click", function(clickEvent){
    if(AldiCount < BuildingOnePrice){
        return false;
    } else if(AldiCount >= BuildingOnePrice){
    AldiCount -= BuildingOnePrice;
    display.innerHTML = AldiCount;
    }
});


