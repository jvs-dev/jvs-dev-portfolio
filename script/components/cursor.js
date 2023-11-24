let body = document.querySelector("body")

setInterval(() => {
    let div = document.createElement("div")
    div.classList.add("cursor-dust")
    body.insertAdjacentElement("beforeend", div)
    function goMousePosition() {
        window.onmousemove = (event) => {
            div.style.top = `${event.clientY}px`
            div.style.left = `${event.clientX}px`
            div.style.opacity = "1"
        }
    }
    goMousePosition()
    setTimeout(() => {
        body.removeChild(div)
    }, 200);
}, 10);

window.addEventListener("click", (event) => {
    let div1 = document.createElement("div")
    body.insertAdjacentElement("beforeend", div1)
    div1.classList.add("cursor-dust")
    div1.classList.add("click")
    div1.style.top = `${event.clientY}px`
    div1.style.left = `${event.clientX}px`
    div1.style.opacity = "1"

    let div2 = document.createElement("div")
    body.insertAdjacentElement("beforeend", div2)
    div2.classList.add("cursor-dust")
    div2.classList.add("click")
    div2.style.top = `${event.clientY}px`
    div2.style.left = `${event.clientX}px`
    div2.style.opacity = "1"
    
    let div3 = document.createElement("div")
    body.insertAdjacentElement("beforeend", div3)
    div3.classList.add("cursor-dust")
    div3.classList.add("click")
    div3.style.top = `${event.clientY}px`
    div3.style.left = `${event.clientX}px`
    div3.style.opacity = "1"

    let div4 = document.createElement("div")
    body.insertAdjacentElement("beforeend", div4)
    div4.classList.add("cursor-dust")
    div4.classList.add("click")
    div4.style.top = `${event.clientY}px`
    div4.style.left = `${event.clientX}px`
    div4.style.opacity = "1"
    setTimeout(() => {
        div1.style.transform = "translate(40px, 0px)"
        div1.style.boxShadow = "-80px 0px 0px var(--cyan)"
        div1.style.opacity = "0"
        
        div2.style.transform = "translate(0px, 40px)"
        div2.style.boxShadow = "0px -80px 0px var(--cyan)"
        div2.style.opacity = "0"
        
        div3.style.transform = "translate(30px, 30px)"
        div3.style.boxShadow = "-60px -60px 0px var(--cyan)"
        div3.style.opacity = "0"

        div4.style.transform = "translate(30px, -30px)"
        div4.style.boxShadow = "-60px 60px 0px var(--cyan)"
        div4.style.opacity = "0"
    }, 1);
    setTimeout(() => {
        body.removeChild(div1)
        body.removeChild(div2)
        body.removeChild(div3)
        body.removeChild(div4)
    }, 500);
})