
var upgradeClickerPrice = 10;


document.getElementById("upgradeClicker").addEventListener("click", function(clickEvent){
    if(AldiCount >= upgradeClickerPrice){
        AldiCount -= upgradeClickerPrice
        StartClickValue++;
        display.innerHTML = AldiCount;      
    }
});