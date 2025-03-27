import Creator from "../../utilities/creator.js";
import Form from "../form/form.js";
import ListButtons from "../list-btns/list-buttons.js";
import { headerParams } from "./header-params.js";

export default class Header extends Creator {
  constructor() {
    super(headerParams);
    this.listButtons = new ListButtons();
    this.form = new Form();
    this.childs = [this.listButtons, this.form];
    this._addChildsElement();
  }
}
