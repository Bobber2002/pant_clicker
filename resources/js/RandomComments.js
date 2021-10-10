(function UpdateComments() {
    setTimeout(function () {
        var str = document.getElementById("RandomComments")
        if (AldiCount<10) str.innerHTML = "You feel like opening a retail store.";
        else if (AldiCount<100) str.innerHTML = "You have few customers";
        else if (AldiCount<1000) str.innerHTML = "You start to do well";
      UpdateComments()
    }, 5); 
  }());