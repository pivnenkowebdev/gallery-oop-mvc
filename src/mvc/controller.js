export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.#setEventListeners();
  }
  #setEventListeners() {
    this.view.header.element.addEventListener("click", (e) => {
      if (e.target.closest("#burger")) {
        this.view.header.listButtons.show();
        this.view.header.burger._shangeStyle();
      }
    });
  }
}
