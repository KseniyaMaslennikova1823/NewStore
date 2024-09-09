const sliderItem = document.querySelectorAll(".headerSliders_slide");
const sliderLine = document.querySelector(".headerSliders");
const sliderDots = document.querySelectorAll(".header_slider_btn")

let sliderCount = 0;
let sliderWidth;

window.addEventListener("resize", showSlide);

function showSlide() {
    sliderWidth = document.querySelector(".headerSliders").offsetWidth;
    sliderLine.style.width = sliderWidth * sliderItem.lenght + "px";
    sliderItem.forEach(item => item.style.width = sliderWidth + "px");

    rollSlider();
}
showSlide();

function nextSlide() {
    sliderCount ++;
    if (sliderCount >= sliderItem.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
}
function prevSlide() {
    sliderCount --;
    if (sliderCount < 0) sliderCount = sliderItem.length -1;

    rollSlider();
    thisSlide(sliderCount);
}

function rollSlider() {
    sliderItem.forEach(item => {
        item.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
    });
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove("_active"));
    sliderDots[index].classList.add("_active");
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})
