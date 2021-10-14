let card = document.getElementById("card");
let section = document.getElementsByTagName("Section")[0];
let cardWidthPx = card.offsetWidth;
let corners = Array.from(document.getElementById("corners").children);
let pixels = Array.from(document.getElementsByClassName("pixel"));
const colorArray = ["#ececec", "#ffffff"];

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________                          ';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);

    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = Math.floor(Math.random() * 40) + start;
      this.queue.push({from, to, start, end});
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let {from, to, start, end, char} = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {char = this.randomChar(); this.queue[i].char = char;}
        output += `<span class='dud'>${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {this.resolve();} else {
      this.frameRequest = requestAnimationFrame(this.update); this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}



document.addEventListener('DOMContentLoaded', function () {
  animatePixels(document.getElementsByClassName("focused")[0])
}, false);

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

function getNewContent(name) {
  switch (name) {
    case "about":
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      break;
    case "services":
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      break;
    case "workflow":
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      break
    case "contact":
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    case "tech-stack":
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      break
    case "tech-stack":
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      break
    default:
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      break;
  }
}



function changeChars(text, el) {
  const fx = new TextScramble(el);

  const next = () => {
    fx.setText(text)
  }

  next()
}


function animatePixels(e) {
  let pageName = e.name
  let descriptionEl = document.getElementsByClassName("description-content")[0]
  window.history.replaceState({}, pageName, pageName + '.html')
  document.getElementsByClassName("focused")[0].classList.remove("focused");
  e.classList.add("focused");
  corners.forEach((corner) => {
    if (corner.tagName == "DIV") {
      corner.style.display = "block";
    }
  });
  let timerId = setInterval(pixelate, 100);
  changeChars(getNewContent(pageName), descriptionEl)
  setTimeout(() => {
    displayOneCorner();
    clearInterval(timerId);
  }, 1080);
}
