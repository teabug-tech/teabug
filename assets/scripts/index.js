let card = document.getElementById("card");
let section = document.getElementsByTagName("Section")[0];
let cardWidthPx = card.offsetWidth;
let corners = Array.from(document.getElementById("corners").children);
let pixels = Array.from(document.getElementsByClassName("pixel"));
const colorArray = ["#ececec", "#ffffff"];

displayOneCorner();
pixelate();

function displayOneCorner() {
    corners.forEach((corner) => {
        if (corner.tagName == "DIV") {
            corner.style.display = "none";
        }
    });
    let randomCorner = corners[Math.floor(Math.random() * 4) + 1];
    randomCorner.style.display = "block";
}

function pixelate() {
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = colorArray[Math.floor(Math.random() * 2)];
    });
}

function animatePixels(e) {
    document.getElementsByClassName("focused")[0].classList.remove("focused");
    e.classList.add("focused");
    corners.forEach((corner) => {
        if (corner.tagName == "DIV") {
            corner.style.display = "block";
        }
    });
    let timerId = setInterval(pixelate, 100);
    setTimeout(() => {
        displayOneCorner();
        clearInterval(timerId);
    }, 500);
}
