let index = 0;
function scrollSlides() {
    index = (index + 1) % 5;
    document.getElementById('slider').style.transform = `translateX(-${index * 100}vw)`;
}
setInterval(scrollSlides, 5000);