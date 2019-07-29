// load styles
require("../styles/index.scss")

// set copyright year
const footerYear = document.querySelector("#footer .year")
footerYear.textContent = new Date().getFullYear()

// scroll event handler
let requestFrame = true
window.addEventListener("scroll", (e) => {
    const posY = window.scrollY
    if (requestFrame) {
        requestFrame = false
        window.requestAnimationFrame(() => {
            requestFrame = true

            // header parallax
            header.style.opacity = Math.max(0, 1 - posY / 260)
            header.style.transform = `translate(0, -${posY / 3}px)`
        })
    }
})

// load event handler
window.addEventListener("load", (e) => {
    // show content after load
    setTimeout(() => header.style.opacity = null, 200)
    setTimeout(() => content.style.marginTop = null, 400)
})