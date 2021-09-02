console.log("Hello :P");
var AldiCount = 0;
var AldiCountShown = AldiCount.toFixed(0);
var display = document.getElementById("DisplayAldiPointCount");
var StartClickValue = 1;

document.getElementById("BigAldiClicker").addEventListener("click", function(clickEvent){
    AldiCount+=StartClickValue;
    display.innerHTML = AldiCountShown;
});

(function setAldiCountShownAldiCountLoop() {
    setTimeout(function () {
        AldiCountShown = AldiCount.toFixed(0);        
    setAldiCountShownAldiCountLoop()
}, 1); 
  }());

