var section_loading = document.getElementById("section-loading")
var body = document.querySelector("body")

function site_loaded() {
    setTimeout(() => {
        section_loading.style.opacity = "0"
        setTimeout(() => {
            section_loading.style.display = "none"
            body.style.overflowY = "auto"
            window.scroll({
                top: 80,
                left: 0,                
            });
        }, 500);
    }, 500);
}

window.addEventListener("load", site_loaded())