


var saveData = JSON.parse(localStorage.getItem('data'));



(function load() {
  
    

    PriceIncreaser = Object.values(saveData)[0]
    apps = Object.values(saveData)[1]
    BuildingAmount = Object.values(saveData)[2]
    PantCount = Object.values(saveData)[3]
    a = Object.values(saveData)[4]
    StartClickValue = Object.values(saveData)[5]
    upgradeClickerPrice = Object.values(saveData)[6]
    upgradeClickerAmount = Object.values(saveData)[7]
    priceArr = Object.values(saveData)[8]
    amountArr = Object.values(saveData)[9]
  



  }());

function reset(){
    
    PriceIncreaser = 1.15
    apps = 0
    BuildingAmount = 0
    PantCount = 0
    a = 1
    StartClickValue = 1
    upgradeClickerPrice = 10
    upgradeClickerAmount = 1
    priceArr = [];
    amountArr = [];

    save();
    location.reload();
};