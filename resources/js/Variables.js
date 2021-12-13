fetch('resources/json/buildingsData.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                createArr(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
            
            
            
            


//APPS
var apps = 0;
//APPS

// BIG CLICKER
var BigClicker = document.getElementById("BigPantClicker");
// BIG CLICKER

//Get element by id
var DisplayBuildingPrice = document.getElementById("0");
var display = document.getElementById("DisplayPantPointCount");
//Get element by id

// Building Amounts
var BuildingAmount = 0;
// Building Amounts

//Clicker script
var PantCount = 0;
var PantCountShown = Math.floor(PantCount);
var a = 1;
var StartClickValue = 1;
//Clicker script 


// Clicker Upgrades
var upgradeClickerPrice = 10;
var upgradeClickerAmount = 1;
// Clicker Upgrades

// Price 
var priceArr = [];
// Price


// Amount
var amountArr = [];
// Amount

var PriceIncreaser = 1.6
var BuildingPriceIncreaser = PriceIncreaser ** BuildingAmount;
// Price 

function createArr(data){
    var arr = [];
    
    for (let i = 0; i < data.length; i++) {
        if(priceArr.length<data.length){
            const element = data[i];
            arr.push(element);    
            priceArr.push(element.price)
        }
        if(amountArr.length<data.length){
            const element = data[i];
            arr.push(element);    
            amountArr.push(element.amount)
        }

    }

};

console.log(amountArr);