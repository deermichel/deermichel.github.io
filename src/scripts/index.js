// load styless
require("../styles/index.scss")

// set copyright year
const footerYear = document.querySelector("footer .year")
// footerYear.textContent = new Date().getFullYear()

const stripe = document.querySelector("#header .stripe")
const headerContainer = document.querySelector("#header .header-container")
const projects = document.querySelectorAll("#content .project")

let skipFrame = false
window.addEventListener("scroll", (e) => {
    const posY = window.scrollY
    if (!skipFrame) {
        window.requestAnimationFrame(() => {
            const progress = Math.min(1, posY / 100)

            stripe.style.transform = `rotate(${25 * (1 - progress)}deg)`
            stripe.style.opacity = 1 - progress
            header.style.height = `${460 - posY}px`
            projects.forEach((project) => project.style.transform = `rotate(${25 * (1 - progress)}deg)`)

            if (progress == 1) {
                headerContainer.classList.add("fixed")
            } else {
                headerContainer.classList.remove("fixed")
            }

            skipFrame = false
        })
        skipFrame = true
    }
})