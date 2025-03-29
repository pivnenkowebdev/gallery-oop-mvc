import style from "./buttons.module.css";

const listButtonsParams = {
  tagName: "ul",
  attr: {
    id: "listButtons",
  },
  classList: [style.list],
};

const btnsParams = [
  {
    tagName: "button",
    attr: {
      "data-btn": "russia",
    },
    classList: [style.btn],
    imgSrc: "russia.svg",
  },
  {
    tagName: "button",
    attr: {
      "data-btn": "israel",
    },
    classList: [style.btn],
    imgSrc: "israel.svg",
  },
  {
    tagName: "button",
    attr: {
      "data-btn": "georgia",
    },
    classList: [style.btn],
    imgSrc: "georgia.svg",
  },
  {
    tagName: "button",
    attr: {
      "data-btn": "japan",
    },
    classList: [style.btn],
    imgSrc: "japan.svg",
  },
  {
    tagName: "button",
    attr: {
      "data-btn": "ukraine",
    },
    classList: [style.btn],
    imgSrc: "ukraine.svg",
  },
  {
    tagName: "button",
    attr: {
      "data-btn": "britain",
    },
    classList: [style.btn],
    imgSrc: "britain.svg",
  },
  {
    tagName: "button",
    attr: {
      "data-btn": "india",
    },
    classList: [style.btn],
    imgSrc: "india.svg",
  },
  {
    tagName: "button",
    attr: {
      "data-btn": "korea",
    },
    classList: [style.btn],
    imgSrc: "korea.svg",
  },
  {
    tagName: "button",
    attr: {
      "data-btn": "turkey",
    },
    classList: [style.btn],
    imgSrc: "turkey.svg",
  },
  {
    tagName: "button",
    attr: {
      "data-btn": "china",
    },
    classList: [style.btn],
    imgSrc: "china.svg",
  },
  {
    tagName: "button",
    attr: {
      "data-btn": "egypt",
    },
    classList: [style.btn],
    imgSrc: "egypt.svg",
  },
  {
    tagName: "button",
    attr: {
      "data-btn": "greece",
    },
    classList: [style.btn],
    imgSrc: "greece.svg",
  },
];

export { listButtonsParams, btnsParams };
