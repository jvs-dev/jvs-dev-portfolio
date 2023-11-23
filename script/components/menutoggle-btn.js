var body = document.querySelector("body")
var menutoggle_btn = document.getElementById("menutoggle-btn")
var section_menu = document.getElementById("section-menu")
var header = document.querySelector(".main__header")

menutoggle_btn.onclick = function () {
    if (menutoggle_btn.classList.contains("active")) {
        menutoggle_btn.classList.remove("active")
        section_menu.classList.remove("active")
        setTimeout(() => {            
            section_menu.style.display = "none"
        }, 500);
    } else {
        menutoggle_btn.classList.add("active")
        section_menu.style.display = "flex"        
        setTimeout(() => {
            section_menu.classList.add("active")
        }, 1);
    }
}