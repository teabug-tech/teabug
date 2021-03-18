let card = document.getElementById("card");
let cardWidthPx = card.offsetWidth;
let corners = Array.from(document.getElementById("corners").children);
let pixels = Array.from(document.getElementsByClassName("pixel"));
let pixelEdgePx = Math.floor(cardWidthPx / 29);
let pixelEdgeVw = (pixelEdgePx * 80) / cardWidthPx;
const colorArray = ["#ECECEC", "#FFFFFF"];

function displayOneCorner() {
    corners.forEach((corner) => {
        corner.style.display = "none";
    });
    let randomCorner = corners[Math.floor(Math.random() * 4)];
    randomCorner.style.display = "block";
}

displayOneCorner();

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
    corners.forEach((corner) => {
        corner.style.display = "block";
    });
    let timerId = setInterval(pixelate, 100);
    setTimeout(() => {
        displayOneCorner();
        clearInterval(timerId);
    }, 500);
}
