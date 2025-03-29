import Header from "../components/header/header";
import ListImages from "../components/list-images/list";

export default class View {
  #containerApp = document.body;
  constructor() {
    this.header = new Header();
    this.listImages = new ListImages();
    this.#showInterface();
  }

  #showInterface() {
    this.#containerApp.append(this.header.getElement());
    this.#containerApp.append(this.listImages.getElement());
  }
}
