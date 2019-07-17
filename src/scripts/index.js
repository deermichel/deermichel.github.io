// load styless
require("../styles/index.scss")

// set copyright year
const footerYear = document.querySelector("footer .year")
// footerYear.textContent = new Date().getFullYear()

const titleContainer = document.querySelector("main .title-container")
const bgStripe = document.querySelector("main .bg .stripe")
const projects = document.querySelectorAll("main .project")
const showcaseHider = document.querySelector("main .showcase-hider")
const bg = document.querySelector("main .bg")

let skipFrame = false
window.addEventListener("scroll", (e) => {
    const posY = window.scrollY
    if (!skipFrame) {
        window.requestAnimationFrame(() => {
            // console.log(posY)
            // titleContainer.style.opacity = 1 - Math.min(posY, 100) / 100.0
            const progress = Math.min(96, posY) / 96.0
            const rotation = 25.0 - 25.0 * progress;
            titleContainer.style.transform = `translate(-50%, -${50 + 50 * progress}%)`
            bgStripe.style.transform = `rotate(${rotation}deg)`
            projects.forEach((project) => {
                project.style.transform = `rotate(${rotation}deg)`
            })

            if (posY > 96) {
                titleContainer.classList.add("fixed")
                showcaseHider.classList.add("fixed")
                bg.classList.add("fixed")
            } else {
                titleContainer.classList.remove("fixed")
                showcaseHider.classList.remove("fixed")
                bg.classList.remove("fixed")
            }

            skipFrame = false
        })
        skipFrame = true
    }
})