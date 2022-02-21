document.getElementById('reset').addEventListener('click', function(clickEvent){
    reset();
    document.location.reload()
});

function reset(){

    console.log('reset');
    let varObj = {
        PriceIncreaser,apps,BuildingAmount,PantCount,a,StartClickValue,upgradeClickerPrice,upgradeClickerAmount,priceArr,amountArr
    }


    localStorage.clear('data',JSON.stringify(varObj));
}