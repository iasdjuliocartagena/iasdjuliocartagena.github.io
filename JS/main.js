let mainUbication = window.scrollY;
window.addEventListener("scroll", () => {
    let currentDisplacement = window.scrollY;
    if (mainUbication > currentDisplacement) {
        document.getElementsByTagName("nav")[0].style.top = "0px";
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    mainUbication = currentDisplacement;
})

//Hamburguer Menu

let linksHeader = document.querySelector(".links-header");
let trafficLight = true;
let hamburguer = document.querySelector(".hamburguer")
hamburguer.addEventListener("click", () => {
    linksHeader.classList.toggle("extended-menu");
    if (trafficLight === true) {
        hamburguer.style.color = "#fff";
        trafficLight = false
    } else {
        hamburguer.style.color = "#000";
        trafficLight = true
    }
})