import Creator from "../../utilities/creator.js";
import {
  burgerBottomLineParams,
  burgerMiddleLineParams,
  burgerParams,
  burgerTopLineParams,
} from "./burger-params.js";
import style from "./burger.module.css";

export default class Burger extends Creator {
  constructor() {
    super(burgerParams);
    this.topLine = new Creator(burgerTopLineParams);
    this.middleLine = new Creator(burgerMiddleLineParams);
    this.bottomLine = new Creator(burgerBottomLineParams);
    this.childs = [this.topLine, this.middleLine, this.bottomLine];
    this._addChildsElement();
  }

  _shangeStyle() {
    this.element.classList.toggle(style.open);
  }
}
