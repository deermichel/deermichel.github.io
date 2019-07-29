// load styles
require("../styles/index.scss")

// set copyright year
const footerYear = document.querySelector("#footer .year")
footerYear.textContent = new Date().getFullYear()

// const stripe = document.querySelector("#header .stripe")
// const headerContainer = document.querySelector("#header .header-container")

let skipFrame = false
window.addEventListener("scroll", (e) => {
    const posY = window.scrollY
    if (!skipFrame) {
        window.requestAnimationFrame(() => {
            
            // const progress = Math.min(1, posY / 100)

            // stripe.style.transform = `rotate(${25 * (1 - progress)}deg)`
            // stripe.style.opacity = 1 - progress
            // header.style.height = `${460 - posY}px`
            
            // if (progress == 1) {
            //     headerContainer.classList.add("fixed")
            // } else {
            //     headerContainer.classList.remove("fixed")
            // }

            // header.style.filter = `blur(${posY / 80}px)`
            header.style.opacity = Math.max(0, 1 - posY / 260);
            header.style.transform = `translate(0, -${posY / 3}px)`

            skipFrame = false
        })
        skipFrame = true
    }
})