import {
  _append,
  appearOnScroll,
  fadeInOnScroll,
  menuBtnHandler,
  getElement,
} from "./src/Utils/Helpers";

menuBtnHandler();
const [contactElement] = getElement(["#contact"]);

contactElement.addEventListener("click", (e) => {
  e.preventDefault();
  const [footer] = getElement(["footer"]);
  footer.scrollIntoView();
});

const faders = document.querySelectorAll(".main-text");
const sliders = document.querySelectorAll(".main-image");

faders.forEach((fader) => appearOnScroll.observe(fader));
sliders.forEach((slider) => fadeInOnScroll.observe(slider));
