(function UpdatePantCountShown() {
    setTimeout(function () {
        display.innerHTML = PantCountShown;
      UpdatePantCountShown()
    }, 5); 
  }());

  (function PantCountShownMathFloor() {
    setTimeout(function () {
        PantCountShown = Math.floor(PantCount);
        PantCountShownMathFloor()
    }, 100); 
  }());