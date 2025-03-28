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

    this.view.header.form.element.addEventListener("submit", async (e) => {
      e.preventDefault();
      const dataFromForm = new FormData(e.target).get("search");
      const result = await this.model.getData(dataFromForm);
      console.log(result);
    });
  }
}
