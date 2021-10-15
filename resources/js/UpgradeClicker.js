document.getElementById("upgradeClicker").addEventListener("click", function(clickEvent){
    if(PantCount >= upgradeClickerPrice){
        PantCount -= upgradeClickerPrice
        StartClickValue+=upgradeClickerAmount; 
        document.getElementById('upgradeClicker').remove();
    }
});