const BigClicker = document.querySelectorAll('.BigAldiClicker');

let LockAnimation = false;

function PlayAnimation() {
    if(LockAnimation) return;
    LockAnimation = true;

    if (this === BigClicker) return;

    this.classList.add('vend');

    setTimeout(() => {
        BigClicker.classList.remove('vend')
        LockAnimation = false;
        }, 1500);
};


