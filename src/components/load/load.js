import Creator from "../../utilities/creator.js";
import { fadeParams, imgLoadParams } from "./load-params.js";
export default class Load extends Creator {
  constructor() {
    super(fadeParams);
    this.imgLoad = new Creator(imgLoadParams);
    this.childs.push(this.imgLoad);
    this._addChildsElement();
  }

  removeElement() {
    this.element.remove();
  }
}
