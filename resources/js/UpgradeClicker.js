document.getElementById("upgradeClicker").addEventListener("click", function(clickEvent){
    if(AldiCount >= upgradeClickerPrice){
        AldiCount -= upgradeClickerPrice
        StartClickValue+=upgradeClickerAmount; 
    }
});