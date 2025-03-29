export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.#setEventListeners();
  }

  #setEventListeners() {
    this.view.header.element.addEventListener("click", (e) =>
      this.#toggleMobileMenu(e),
    );
    this.view.header.form.element.addEventListener("submit", async (e) => {
      this.view.listImages.data = await this.#getData(e);
      this.view.listImages.render();
    });
  }

  #toggleMobileMenu(e) {
    if (e.target.closest("#burger")) {
      this.view.header.listButtons.show();
      this.view.header.burger._shangeStyle();
    }
  }

  async #getData(e) {
    e.preventDefault();
    const dataFromForm = new FormData(e.target).get("search");
    const result = await this.model.getData(dataFromForm);
    return result;
  }
}
