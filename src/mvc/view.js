import Header from "../components/header/header.js";
import ListImages from "../components/list-images/list.js";
import Load from "../components/load/load.js";

export default class View {
  #containerApp = document.body;
  constructor() {
    this.header = new Header();
    this.listImages = new ListImages();
    this.loader = new Load();
    this.#showInterface();
  }

  #showInterface() {
    this.#containerApp.append(this.header.getElement());
    this.#containerApp.append(this.listImages.getElement());
  }

  addLoader() {
    this.#containerApp.append(this.loader.getElement());
  }

  removeLoader() {
    setTimeout(() => {
      this.loader.removeElement();
    }, 1000);
  }
}
