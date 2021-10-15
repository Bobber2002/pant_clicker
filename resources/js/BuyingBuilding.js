fetch('resources/json/buildingsData.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                buyBuilding(data);
                changeColor(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

function buyBuilding(data){
    for (var i = 0; i < data.length; i++){
        
        var price = data[i].no;
        
        
        function buy(bno){
            var thisBuilding = data[bno]
            var priceId = thisBuilding.bPriceId;
            if(PantCount >= thisBuilding.price){
                PantCount -= thisBuilding.price;
                apps += thisBuilding.pps;
                thisBuilding.amount++;
                BuildingPriceIncreaser = 1.15 ** thisBuilding.amount;
                thisBuilding.price = thisBuilding.oPrice;
                thisBuilding.price = thisBuilding.price * BuildingPriceIncreaser;
                document.getElementById(priceId).innerHTML = thisBuilding.price.toFixed(1);
            }
        }

        
        
        document.getElementById(data[i].id).addEventListener('click', function(clickEvent){
            buy(this.dataset.bno);
        });
    }
}
function changeColor(data){
    setTimeout(
        function update(data){
            for(var i = 0; i < data.length; i++){
                if(document.getElementById(data[i].bPriceId).innerHTML > PantCount){
                    document.getElementById(data[i].bPriceId).style.color = 'red';
                    document.getElementById(data[i].bNameId).style.color = 'red';
                }else{
                    document.getElementById(data[i].bPriceId).style.color = 'limegreen';
                    document.getElementById(data[i].bNameId).style.color = 'limegreen';
                }
            }
            changeColor(data)    
        }, 100, data)
}


// setTimeout(function(){
//     changeColor(data)
// }, 250)

// --------------------BUILDING ONE---------------------------------------------------

document.getElementById("buildingOne").addEventListener("click", function(clickEvent){
    if(PantCount >= BuildingOnePrice){
        PantCount -= BuildingOnePrice;
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
    if(PantCount >= BuildingTwoPrice){
        PantCount -= BuildingTwoPrice;
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
