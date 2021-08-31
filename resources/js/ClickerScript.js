console.log("Hello :P");
var AldiCount = 0;
var display = document.getElementById("DisplayAldiPointCount");
var StartClickValue = 1;

document.getElementById("BigAldiClicker").addEventListener("click", function(clickEvent){
    AldiCount+=StartClickValue;
    display.innerHTML = AldiCount;
});

