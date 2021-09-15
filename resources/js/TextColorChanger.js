(function UpdateTextColor() {
    setTimeout(function () {
        if(AldiCount >= BuildingOnePrice){
            BuildingText1.style.color = "LimeGreen";
            BuildingText1PriceTag.style.color = "LimeGreen"
            } else if(AldiCount - BuildingOnePrice){
                BuildingText1.style.color = "Red";
                BuildingText1PriceTag.style.color = "Red";
            }
      UpdateTextColor()
    }, 5); 
  }());


  