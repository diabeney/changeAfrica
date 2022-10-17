import {
  _append,
  appearOnScroll,
  fadeInOnScroll,
  menuBtnHandler,
} from "./src/Utils/Helpers";

menuBtnHandler();

const faders = document.querySelectorAll(".main-text");
const sliders = document.querySelectorAll(".main-image");

faders.forEach((fader) => appearOnScroll.observe(fader));
sliders.forEach((slider) => fadeInOnScroll.observe(slider));
