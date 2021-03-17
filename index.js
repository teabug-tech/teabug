let card = document.getElementById("card");
const colorArray = ["#000", "#FFFFFF"];

let pixels = document.getElementsByClassName("pixel");

Array.from(pixels).forEach((e) => {
    e.style.backgroundColor = colorArray[Math.floor(Math.random() * 2)];
});

/*
function pixelate() {
    card.innerHTML = "";
    for (i = 0; i < 29 * 14; i++) {
        let newSquare = document.createElement("div");
        newSquare.style.width = "55px";
        newSquare.style.height = "55px";
        newSquare.style.backgroundColor =
            colorArray[Math.floor(Math.random() * 2)];
        card.appendChild(newSquare);
    }
}
*/

function pixelate(numSquaresHor, numSquaresVer, pixelWidth, pixelHeight) {
    card.innerHTML = "";
    card.style.backgroundColor = "#ffffff";
    for (let i = 0; i < numSquaresHor * numSquaresVer; i++) {
        let newPixel = document.createElement("div");
        newPixel.classList.add("pixel");
        newPixel.style.width = pixelWidth;
        newPixel.style.height = pixelHeight;
        newPixel.style.backgroundColor =
            colorArray[Math.floor(Math.random() * 2)];
        newPixel.style.display = "inline-block";
        newPixel.style.marginBottom = "-4px";
        card.appendChild(newPixel);
    }
}

function animatePixels() {
    let pixel = Array.from(document.getElementsByClassName("pixel"))[0];
    let pixelWidth = pixel.offsetWidth;
    let pixelHeight = pixel.offsetHeight;
    let numSquaresHor = Math.floor(card.offsetWidth / pixel.offsetWidth);
    let numSquaresVer = Math.floor(card.offsetHeight / pixel.offsetHeight);
    let corners = document.getElementById("corners");
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            pixelate(numSquaresHor, numSquaresVer, pixelWidth, pixelHeight);
            setTimeout(function () {
                card.innerHTML = "";
                card.appendChild(corners);
                card.style.backgroundColor = "#000";
                Array.from(pixels).forEach((e) => {
                    e.style.backgroundColor =
                        colorArray[Math.floor(Math.random() * 2)];
                });
            }, 0);
        }, 5);
    }
}
