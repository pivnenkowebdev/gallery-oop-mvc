import Creator from "../utilities/creator.js";
import { btnsParams, listButtonsParams } from "./list-buttons-params.js";

export default class ListButtons extends Creator {
  constructor() {
    super(listButtonsParams);
    this.childs = [];
    this.#createItems();
    this._addChildsElement();
  }

  #createItems() {
    btnsParams.forEach((itemParams) => {
      const item = document.createElement("li");
      const btn = new Creator(itemParams);
      item.append(btn.getElement());
      this.childs.push(item);
    });
  }
}
