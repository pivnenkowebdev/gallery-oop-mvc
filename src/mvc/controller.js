export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.header.form.input.element.value = this.model.defaultValue;
    this.#setEventListeners();
    this.queryHelper(this.model.defaultValue);
  }

  #setEventListeners() {
    this.view.header.element.addEventListener("click", (e) =>
      this.#toggleMobileMenu(e),
    );
    this.view.header.form.element.addEventListener("submit", async (e) => {
      e.preventDefault();
      this.view.listImages.data = await this.#getData(e);
      this.view.listImages.render();
    });
    this.view.header.listButtons.element.addEventListener("click", (e) => {
      this.btnChoiceHandler(e);
    });
  }

  #toggleMobileMenu(e) {
    if (e.target.closest("#burger")) {
      this.view.header.listButtons.show();
      this.view.header.burger._shangeStyle();
    }
  }

  async #getData(e) {
    const dataFromForm = new FormData(e.target).get("search");
    const result = await this.model.getData(dataFromForm);
    return result;
  }

  async queryHelper(currentQuery) {
    this.view.listImages.data = await this.model.getData(currentQuery);
    this.view.listImages.render();
  }

  async btnChoiceHandler(e) {
    const isBtn = e.target.closest("[data-btn]");
    if (isBtn) {
      await this.queryHelper(isBtn.dataset.btn);
    }
  }
}
