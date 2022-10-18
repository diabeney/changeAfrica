import { getElement, menuBtnHandler } from "../Utils/Helpers";

menuBtnHandler();

const [contactElement] = getElement(["#contact"]);

contactElement.addEventListener("click", (e) => {
  e.preventDefault();
  const [footer] = getElement(["footer"]);
  footer.scrollIntoView();
});
