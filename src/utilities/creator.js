export default class Creator {
  constructor(paramsObject) {
    this.parametrs = paramsObject;
    this.element = this.#createElement();
    if (this.element) {
      this.#setStyle();
      this.#setAttributes();
      this.#setInnerText();
    }
  }

  #createElement() {
    return this.parametrs.tagName
      ? document.createElement(this.parametrs.tagName)
      : null;
  }

  #setStyle() {
    if (this.element && Array.isArray(this.parametrs.classList)) {
      this.element.classList.add(...this.parametrs.classList);
    }
  }

  #setAttributes() {
    if (this.element && this.parametrs.attr) {
      for (const key in this.parametrs.attr) {
        this.element.setAttribute(key, this.parametrs.attr[key]);
      }
    }
  }

  #setInnerText() {
    if (this.element && this.parametrs.text) {
      this.element.innerText = this.parametrs.text;
    }
  }

  getElement() {
    return this.element;
  }
}
