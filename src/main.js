import "normalize.css";
import "./main.css";

import Controller from "./mvc/controller.js";
import Model from "./mvc/model.js";
import View from "./mvc/view.js";

class AppInit {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.controller = new Controller(this.model, this.view);
  }
}
console.log(1);

new AppInit();
