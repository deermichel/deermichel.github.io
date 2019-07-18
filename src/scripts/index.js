// load styless
require("../styles/index.scss")

// set copyright year
const footerYear = document.querySelector("footer .year")
// footerYear.textContent = new Date().getFullYear()

const header = document.querySelector("#header")
const titleContainer = document.querySelector(".title-container")

let skipFrame = false
window.addEventListener("scroll", (e) => {
    const posY = window.scrollY
    if (!skipFrame) {
        window.requestAnimationFrame(() => {
            // const progress = Math.min(1, Math.max(1 - titleContainer.getBoundingClientRect().y / titleContainer.offsetTop, 0));
            
            // if (progress == 1) {
            //     header.classList.add("fixed")
            // } else {
            //     // header.classList.remove("fixed")
            // }
            // if (posY < 260) {
            //     header.classList.remove("fixed")
            // }

            // console.log(progress)

            skipFrame = false
        })
        skipFrame = true
    }
})