export const getElement = (...selectors) =>
  selectors.map((item) => document.querySelector(item));

export const create = (tag, content, ...classes) => {
  let element = document.createElement(tag);
  element.textContent = content || null;
  classes.length ? element.classList.add(...classes) : null;
  return element;
};

export const addContent = (element, content) => (element.textContent = content);
export const addClasses = (element, ...classes) =>
  element.classList.add(...classes);

export const _append = (parent, ...children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};

export const createElements = (...tags) => {
  return tags.map((item) => {
    return document.createElement(item);
  });
};

export const addRefs = (element, ref) => (element.href = ref);

export const toggleMenu = (element, menu) => {
  let menuOpened = element.getAttribute("data-visible");
  if (menuOpened === "true") element.setAttribute("data-visible", "false");
  else {
    element.setAttribute("data-visible", "true");
  }
  menu.classList.toggle("hide");
};

const appearOptions = {
  threshold: 0.4,
};

const fadeOptions = { threshold: 0.5 };

export const appearOnScroll = new IntersectionObserver(
  (entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      else {
        entry.target.classList.add("animate__fadeInUp", "show");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions
);

export const fadeInOnScroll = new IntersectionObserver(
  (entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      else {
        entry.target.classList.add("animate__slideInRight", "show");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  fadeOptions
);
