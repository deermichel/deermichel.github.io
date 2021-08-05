// load styles
require("../styles/index.scss")

// smooth scrolling polyfill
const smoothscroll = require("smoothscroll-polyfill")
smoothscroll.polyfill();

// set copyright year
const footerYear = document.querySelector("footer .year")
footerYear.textContent = new Date().getFullYear()

// mobile device
const portfolioHeader = document.querySelector(".portfolio-header")
const isMobile = /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
    // background attachment fallback
    portfolioHeader.style.backgroundAttachment = "scroll"
}

// scroll to portfolio
const portfolioLink = document.querySelector(".links-portfolio")
portfolioLink.addEventListener('click', (e) => {
    e.preventDefault()
    portfolioHeader.scrollIntoView({ behavior: 'smooth' })
})