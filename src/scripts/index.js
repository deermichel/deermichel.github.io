// load styles
require("../styles/index.scss")

// set copyright year
const footerYear = document.querySelector("#footer .year")
footerYear.textContent = new Date().getFullYear()

// project click handler
const showcase = document.querySelector("#content .showcase")
const projects = document.querySelectorAll("#content .project")
projects.forEach((project) => {
    // enter detail view
    project.addEventListener("click", (e) => {
        if (!showcase.classList.contains("detail")) {
            const target = e.target.closest(".project")
            target.classList.add("show")
            showcase.classList.add("detail")
            showcase.scrollIntoView({ behavior: "smooth" })
        }
    })
    // return to overview
    project.querySelector(".exitdetail").addEventListener("click", (e) => {
        project.classList.remove("show")
        showcase.classList.remove("detail")
        e.stopPropagation()
    })
})

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