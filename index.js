let card = document.getElementById("card");
let cardWidthPx = card.offsetWidth;
let pixels = Array.from(document.getElementsByClassName("pixel"));
let pixelEdgePx = Math.floor(cardWidthPx / 29);
let pixelEdgeVw = (pixelEdgePx * 80) / cardWidthPx;
const colorArray = ["#ECECEC", "#FFFFFF"];

pixels.forEach((pixel) => {
    pixel.style.width = `${pixelEdgeVw}vw`;
    pixel.style.height = `${pixelEdgeVw}vw`;
    pixel.style.backgroundColor = colorArray[Math.floor(Math.random() * 2)];
});

function pixelate() {
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = colorArray[Math.floor(Math.random() * 2)];
    });
}

function animatePixels() {
    let timerId = setInterval(pixelate, 100);
    setTimeout(() => {
        clearInterval(timerId);
    }, 500);
}
