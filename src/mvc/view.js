import Header from "../components/header/header";

export default class View {
  #containerApp = document.body;
  constructor() {
    this.header = new Header();
    this.#showInterface();
  }

  #showInterface() {
    this.#containerApp.append(this.header.getElement());
  }
}
