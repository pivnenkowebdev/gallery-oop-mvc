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

new AppInit();

// 1.перенести бургер в MVC
// 2.написать в модели методы для создания запроса (безопасный ключ)
// 3. прикрутить модель к MVC
