// load styless
require("../styles/index.scss")

// set copyright year
const footerYear = document.querySelector("footer .year")
// footerYear.textContent = new Date().getFullYear()

const bgStripe = document.querySelector("#header .bg-container .stripe")
const header = document.querySelector("#header")
const projects = document.querySelectorAll("#content .project")

let skipFrame = false
window.addEventListener("scroll", (e) => {
    const posY = window.scrollY
    if (!skipFrame) {
        window.requestAnimationFrame(() => {
            const progress = Math.min(1, posY / 100)

            bgStripe.style.transform = `rotate(${25 * (1 - progress)}deg)`
            bgStripe.style.opacity = 1 - progress
            header.style.height = `${Math.max(260, 460 - posY)}px`
            projects.forEach((project) => project.style.transform = `rotate(${25 * (1 - progress)}deg)`)

            skipFrame = false
        })
        skipFrame = true
    }
})