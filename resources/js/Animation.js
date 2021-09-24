let LockAnimation = true;


BigClicker.addEventListener("click", function(clickEvent){
    if(LockAnimation){
    
        console.log(LockAnimation);
        this.classList.add('pulse');
        
        setTimeout(() => {
            BigClicker.classList.remove('pulse');
            LockAnimation = true;
        }, 110)

    }
});
