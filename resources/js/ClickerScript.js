console.log("Hello :P")
var AldiCount = 0
var display = document.getElementById("PointsCounter");


document.getElementById("BigAldiClicker").addEventListener("click", function(clickEvent){
    console.log("You Pressed Meh :D")
    AldiCount++;
    display.innerHTML = AldiCount;
});


