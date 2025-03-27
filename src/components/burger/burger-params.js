import style from "./burger.module.css";

const burgerParams = {
  tagName: "button",
  attr: {
    id: "burger",
  },
  classList: [style.burger],
};

const burgerTopLineParams = {
  tagName: "span",
  classList: [style.burgerTopLine],
};

const burgerMiddleLineParams = {
  tagName: "span",
  classList: [style.burgerMiddleLine],
};

const burgerBottomLineParams = {
  tagName: "span",
  classList: [style.burgerBottomLine],
};

export {
  burgerParams,
  burgerTopLineParams,
  burgerMiddleLineParams,
  burgerBottomLineParams,
};
