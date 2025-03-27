import Creator from "../../utilities/creator.js";
import { btnSubmitParams, formParams, inputParams } from "./form-params.js";

export default class Form extends Creator {
  constructor() {
    super(formParams);
    this.input = new Creator(inputParams);
    this.btnSubmit = new Creator(btnSubmitParams);
    this.childs = [this.input, this.btnSubmit];
    this._addChildsElement();
  }
}
