const carrossel = document.querySelector(".carrossel"),
firstImg = carrossel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".depoimentos i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth+50;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
    carrossel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carrossel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carrossel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carrossel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    carrossel.classList.remove("dragging");
}


carrossel.addEventListener("mousedown", dragStart);
carrossel.addEventListener("mousemove", dragging);
carrossel.addEventListener("mouseup", dragStop);