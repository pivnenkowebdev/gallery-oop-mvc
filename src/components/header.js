import Creator from "../utilities/creator.js";
import { headerParams } from "./header-params.js";

export default class Header {
  constructor() {
    this.element = new Creator(headerParams).getElement();
  }

  getElement() {
    return this.element;
  }
}

// 1. сюда вставить компоненты:
// - список кнопок
// - инпут
