console.log("Hello :P");

var AldiCount = 0;
var AldiCountShown = Math.floor(AldiCount);
var a = 1;
var display = document.getElementById("DisplayAldiPointCount");
var StartClickValue = 1;

document.getElementById("BigAldiClicker").addEventListener("click", function(clickEvent){
    AldiCount+=StartClickValue;
    display.innerHTML = AldiCountShown;
    console.log(AldiCount);
});
