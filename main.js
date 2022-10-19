import {
  _append,
  appearOnScroll,
  fadeInOnScroll,
  menuBtnHandler,
  getElement,
  addClasses,
} from "./src/Utils/Helpers";

import { url, quotes } from "./src/Utils/data";

menuBtnHandler();
const [contactElement] = getElement("#contact");

contactElement.addEventListener("click", (e) => {
  e.preventDefault();
  const [footer] = getElement("footer");
  footer.scrollIntoView();
});

const faders = document.querySelectorAll(".main-text");
const sliders = document.querySelectorAll(".main-image");

faders.forEach((fader) => appearOnScroll.observe(fader));
sliders.forEach((slider) => fadeInOnScroll.observe(slider));

function slideShow(index) {
  const [inspire, blockquote, author] = getElement(
    ".inspire",
    ".wrapper > blockquote",
    ".author"
  );
  inspire.style.background = `url(${url[index]})`;
  addClasses(inspire, "enhance-background");
  blockquote.textContent = `"${quotes[index].message}"`;
  author.textContent = `~ ${quotes[index].author}`;
}
let index = 0;

setInterval(() => {
  if (index === url.length) index = 0;
  slideShow(index);
  index++;
}, 8000);
