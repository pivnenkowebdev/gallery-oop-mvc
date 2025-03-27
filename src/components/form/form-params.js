import style from "./form.module.css";

const formParams = {
  tagName: "form",
  classList: [style.form],
};

const inputParams = {
  tagName: "input",
  classList: [style.input],
  attr: {
    placeholder: "Search...",
  },
};

const btnSubmitParams = {
  tagName: "input",
  classList: [style.btn],
  attr: {
    type: "submit",
    value: "",
  },
};

export { formParams, inputParams, btnSubmitParams };
