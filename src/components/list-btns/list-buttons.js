import {
  btnsParams,
  listButtonsParams,
} from "../list-btns/list-buttons-params.js";

import Creator from "../../utilities/creator.js";

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

      const iconBtn = document.createElement("img");
      iconBtn.src = itemParams.imgSrc;
      btn.getElement().prepend(iconBtn);

      item.append(btn.getElement());
      this.childs.push(item);
    });
  }
}
