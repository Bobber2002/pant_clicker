(function UpdateAldiCountShown() {
    setTimeout(function () {
        display.innerHTML = AldiCountShown;
      UpdateAldiCountShown()
    }, 5); 
  }());

  (function AldiCountShownMathFloor() {
    setTimeout(function () {
        AldiCountShown = Math.floor(AldiCount);
        AldiCountShownMathFloor()
    }, 100); 
  }());