function write_h1_text() {
    setTimeout(() => {
        let h1_animated_writing = document.getElementById("h1-animated-writing")
        let home_img = document.querySelector(".home__img")
        home_img.classList.add("active")
        let text = "Olá, eu sou"
        let animated_text = ""
        let index = 0
        const write_h1_letter = setInterval(() => {
            if (index != text.length) {
                animated_text = animated_text + text[index]
                h1_animated_writing.innerHTML = `${animated_text}|<br><span class="home__h1__span"></span>`
                index++
            } else {
                h1_animated_writing.innerHTML = `Olá, eu sou<br><span class="home__h1__span"></span>`
                write_span_text()
                clearInterval(write_h1_letter)
            }
        }, 100);
    }, 500);
}












function write_span_text() {
    let span_animated_writing = document.querySelector(".home__h1__span")
    let text = "João Vitor Santana"
    let animated_text = ""
    let index = 0
    let write_span_letter = setInterval(() => {
        if (index != text.length) {
            animated_text = animated_text + text[index]
            span_animated_writing.innerHTML = `${animated_text}|`
            index++
        } else {
            span_animated_writing.innerHTML = `${animated_text}`
            write_p_text()
            clearInterval(write_span_letter)
        }
    }, 100);
}





function write_p_text() {
    let home_p = document.querySelector(".home__p")
    let text = "Desenvolvedor Front-End"
    let animated_text = ""
    let index = 0
    let write_p_letter = setInterval(() => {
        if (index != text.length) {
            animated_text = animated_text + text[index]
            home_p.innerHTML = `${animated_text}|`
            index++
        } else {
            animated_cursor()
            clearInterval(write_p_letter)
            write_icons()
        }
    }, 100);

    function animated_cursor() {
        setInterval(() => {
            if (window.innerWidth > 755) {
                if (home_p.innerHTML == `${animated_text}|`) {
                    home_p.innerHTML = `${animated_text} `
                } else {
                    home_p.innerHTML = `${animated_text}|`
                }
            } else {
                home_p.innerHTML = `${animated_text}`
            }
        }, 500);
    }
}

function write_icons() {
    let div_icons = document.querySelector(".home__div--icons")
    let icon1 = document.createElement("ion-icon")
    icon1.classList.add("home__icon")
    icon1.name = "logo-javascript"
    icon1.style = "--clr: #FFEB3B;"
    let icon2 = document.createElement("ion-icon")
    icon2.classList.add("home__icon")
    icon2.name = "logo-nodejs"
    icon2.style = "--clr: #4caf50;"
    let icon3 = document.createElement("ion-icon")
    icon3.classList.add("home__icon")
    icon3.name = "logo-react"
    icon3.style = "--clr: #03a9f4;"
    setTimeout(() => {
        div_icons.insertAdjacentElement("beforeend", icon1)
        let i = 1
        setInterval(() => {
            if (i == 1) {
                icon1.name = `logo-html5`
                icon1.style = "--clr: #ff5722;"
                i = 0
            } else {
                icon1.name = "logo-javascript"
                icon1.style = "--clr: #FFEB3B;"
                i = 1
            }
        }, 1500);
    }, 500);
    setTimeout(() => {
        div_icons.insertAdjacentElement("beforeend", icon2)
        let i = 1
        setInterval(() => {
            if (i == 1) {
                icon2.name = `logo-css3`
                icon2.style = "--clr: #03a9f4;"
                i = 0
            } else {
                icon2.name = "logo-nodejs"
                icon2.style = "--clr: #4caf50;"
                i = 1
            }
        }, 1500);
    }, 1000);
    setTimeout(() => {
        div_icons.insertAdjacentElement("beforeend", icon3)
        let i = 1
        setInterval(() => {
            if (i == 1) {
                icon3.name = `logo-firebase`
                icon3.style = "--clr: #FFEB3B;"
                i = 0
            } else {
                icon3.name = "logo-react"
                icon3.style = "--clr: #03a9f4;"
                i = 1
            }
        }, 1500);
    }, 1500);
}





window.addEventListener("load", write_h1_text())