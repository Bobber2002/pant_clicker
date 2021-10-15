

(function loop() {
  setTimeout(function () {
         PantCount += apps/10;
         var perSecond = document.getElementById("perSecondCounter")  
           perSecond.innerHTML = apps.toFixed(1);
           document.title=(PantCount).toFixed()+' Pant points - Pant Clicker';
       loop()
   }, 100); 
 }());

