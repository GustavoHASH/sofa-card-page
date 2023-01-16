var icon = document.querySelector("#icon-view"),
image = document.querySelector("#image-view");

function viewMode() {
    icon.classList.toggle("fa-street-view");
    icon.classList.toggle("fa-circle-xmark");
    image.setAttribute("src", image.getAttribute("src") === "./images/sofa.svg" ? "./images/sofa.gif" : "./images/sofa.svg");
}