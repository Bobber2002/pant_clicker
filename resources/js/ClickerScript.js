console.log("Hello :P");

document.getElementById("BigAldiClicker").addEventListener("click", function(clickEvent){
    AldiCount+=StartClickValue;
    display.innerHTML = AldiCountShown;
    console.log(AldiCount);
});
