const btns = document.querySelectorAll(".menu__nav__a")
const body = document.querySelector("body")
const menutoggle_btn = document.getElementById("menutoggle-btn")
const section_menu = document.getElementById("section-menu")
const header = document.querySelector(".main__header")
const scroll_to_home = document.getElementById("scroll-to-home")
const goToAbout = document.getElementById("goToAbout")

btns.forEach((btn) =>
    btn.addEventListener('click', (event) => {
        menutoggle_btn.classList.remove("active")
        section_menu.classList.remove("active")
        setTimeout(() => {
            if (btn == goToAbout) {
                window.scroll({
                    left: 0,
                });
            }
        }, 400);
        setTimeout(() => {
            body.style.overflowY = "auto"
            section_menu.style.display = "none"
        }, 500);
    })
);

scroll_to_home.onclick = function () {
    menutoggle_btn.classList.remove("active")
    section_menu.classList.remove("active")
    setTimeout(() => {
        body.style.overflowY = "auto"
        section_menu.style.display = "none"
    }, 500);
}