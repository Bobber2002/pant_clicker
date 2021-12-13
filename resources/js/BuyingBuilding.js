setTimeout(function(){
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
                    
                    function buy(bno){
                        
                        var thisBuilding = data[bno]
                        var priceId = thisBuilding.bPriceId;
                        if(PantCount >= priceArr[bno]){
                            console.log(priceArr[bno]);
                            PantCount -= priceArr[bno];
                            apps += thisBuilding.pps;
                            console.log(priceArr[bno]);
                            console.log('amount'+amountArr[bno]);
                            amountArr[bno]++;
                            console.log('amount'+amountArr[bno]);
                            console.log(priceArr[bno]);
                            BuildingPriceIncreaser = PriceIncreaser ** amountArr[bno];
                            console.log(priceArr[bno]);
                            priceArr[bno] = thisBuilding.oPrice * BuildingPriceIncreaser;
                            console.log(priceArr[bno]);
                            document.getElementById(priceId).innerHTML = priceArr[bno].toFixed(1);
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
},10);
