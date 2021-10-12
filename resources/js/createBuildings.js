fetch('resources/json/buildingsData.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                createBuildings(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

function createBuildings(data){
    var buildingsContainer = document.getElementById('buildings');
    for (var i = 0; i < data.length; i++){

        var buildingButton = document.createElement('button');
        buildingsContainer.appendChild(buildingButton);
        buildingButton.className = "building";
        buildingButton.id = data[i].id;
        buildingButton.dataset.bno = data[i].no;

        var buildingName = document.createElement('p');
        buildingButton.appendChild(buildingName);
        buildingName.className = "building__name";
        buildingName.innerHTML = data[i].name;
        buildingName.id = data[i].bNameId;

        var buildingPrice= document.createElement('p');
        buildingButton.appendChild(buildingPrice);
        buildingPrice.className = "buildingPrice";
        buildingPrice.innerHTML = data[i].price;
        buildingPrice.id = data[i].bPriceId;

    }
}

