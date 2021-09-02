
var upgradeClickerPrice = 10;
var upgradeClickerAmount = 1;



document.getElementById("upgradeClicker").addEventListener("click", function(clickEvent){
    if(AldiCount >= upgradeClickerPrice){
        AldiCount -= upgradeClickerPrice
        StartClickValue+=upgradeClickerAmount;
        display.innerHTML = AldiCountShown;      
    }
});