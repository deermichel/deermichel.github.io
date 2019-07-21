// load styless
require("../styles/index.scss")

// set copyright year
const footerYear = document.querySelector("footer .year")
// footerYear.textContent = new Date().getFullYear()

const stripe = document.querySelector("#header .stripe")
const titleContainer = document.querySelector("#header .title-container")
const projects = document.querySelectorAll("#content .project")

let skipFrame = false
window.addEventListener("scroll", (e) => {
    const posY = window.scrollY
    if (!skipFrame) {
        window.requestAnimationFrame(() => {
            const progress = Math.min(1, posY / 100)

            stripe.style.transform = `rotate(${25 * (1 - progress)}deg)`
            stripe.style.opacity = 1 - progress
            header.style.height = `${Math.max(260, 460 - posY)}px`
            projects.forEach((project) => project.style.transform = `rotate(${25 * (1 - progress)}deg)`)

            // if (progress == 1) {
            //     titleContainer.classList.add("fixed")
            // } else {
            //     titleContainer.classList.remove("fixed")
            // }

            skipFrame = false
        })
        skipFrame = true
    }
})