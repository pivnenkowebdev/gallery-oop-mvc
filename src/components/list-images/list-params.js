import style from "./list-images.module.css";

const listParams = {
  tagName: "ul",
  classList: [style.list],
};

const itemParams = {
  tagName: "li",
  classList: [style.item],
};

const imgParams = {
  tagName: "img",
  classList: [style.img],
  attr: {},
};

export { listParams, itemParams, imgParams };
