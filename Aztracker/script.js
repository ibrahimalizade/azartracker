let page = document.querySelector(".body");
let themeButton = document.querySelector(".themeButton");
themeButton.onclick = function() {
    page.classList.toggle("lightTheme");
    page.classList.toggle("darkTheme");
    };