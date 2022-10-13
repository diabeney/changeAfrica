import {
  _append,
  getElement,
  toggleMenu,
  appearOnScroll,
  fadeInOnScroll,
} from "./src/Utils/Helpers";

const root = document.getElementById("app");
const [menuBtn, closeBtn, nav] = getElement(".menu", ".close", "nav");

[menuBtn, closeBtn].forEach((btn) =>
  btn.addEventListener("click", () => toggleMenu(nav, menuBtn))
);

const faders = document.querySelectorAll(".main-text");
const sliders = document.querySelectorAll(".main-image");

faders.forEach((fader) => appearOnScroll.observe(fader));
sliders.forEach((slider) => fadeInOnScroll.observe(slider));
