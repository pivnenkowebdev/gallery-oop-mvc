import Creator from "../../utilities/creator.js";
import Burger from "../burger/burger.js";
import Form from "../form/form.js";
import ListButtons from "../list-btns/list-buttons.js";
import { headerContentParams, headerParams } from "./header-params.js";

export default class Header extends Creator {
  constructor() {
    super(headerParams);
    this.listButtons = new ListButtons();
    this.form = new Form();
    this.burger = new Burger();
    this.content = new Creator(headerContentParams);
    this.content.childs = [this.burger, this.listButtons, this.form];
    this.content._addChildsElement();
    this.childs.push(this.content);
    this._addChildsElement();
  }
}
