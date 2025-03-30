import style from "./load.module.css";

const fadeParams = {
  tagName: "div",
  classList: [style.fade],
};

const imgLoadParams = {
  tagName: "img",
  attr: {
    src: "gif-load.gif",
  },
  classList: [style.imgLoad],
};

export { fadeParams, imgLoadParams };
