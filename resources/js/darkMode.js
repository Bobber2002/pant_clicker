let DarkTheme =localStorage.getItem("DarkMode")
const darkModeToggle = document.querySelector("#dark-mode-toggle");
// check if darkmode on?

const enableDarkMode = () => {
    document.body.classList.add("DarkModeTheme")
    localStorage.setItem("DarkMode", "enabled")
};

const disableDarkMode = () => {
    document.body.classList.remove("DarkModeTheme")
    localStorage.setItem("DarkMode", null)
};

if (DarkTheme === "enabled"){
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    DarkTheme = localStorage.getItem("DarkMode");
    if(DarkTheme !== "enabled"){
        enableDarkMode();
    } else{
        disableDarkMode();
    }
});