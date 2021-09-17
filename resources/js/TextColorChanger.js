(function UpdateTextColor1() {
    setTimeout(function () {
        if(AldiCount >= BuildingOnePrice){
            BuildingText1.style.color = "LimeGreen";
            BuildingText1PriceTag.style.color = "LimeGreen"
            } else if(AldiCount - BuildingOnePrice){
                BuildingText1.style.color = "Red";
                BuildingText1PriceTag.style.color = "Red";
            }
      UpdateTextColor1()
    }, 5); 
  }());

  (function UpdateTextColor2() {
    setTimeout(function () {
        if(AldiCount >= BuildingTwoPrice){
            BuildingText2.style.color = "LimeGreen";
            BuildingText2PriceTag.style.color = "LimeGreen"
            } else if(AldiCount - BuildingTwoPrice){
                BuildingText2.style.color = "Red";
                BuildingText2PriceTag.style.color = "Red";
            }
      UpdateTextColor2()
    }, 5); 
  }());
