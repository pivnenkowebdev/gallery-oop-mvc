import Header from "../components/header.js";

export default class View {
  #containerApp = document.body;
  constructor() {
    this.header = new Header().getElement();
    this.#showInterface();
  }

  #showInterface() {
    this.#containerApp.append(this.header);
  }
}
