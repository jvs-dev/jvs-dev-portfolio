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