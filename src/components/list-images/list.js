import Creator from "../../utilities/creator.js";
import { imgParams, itemParams, listParams } from "./list-params.js";

export default class ListImages extends Creator {
  data = [];
  constructor() {
    super(listParams);
  }

  render() {
    this.#clean();
    const template = document.createDocumentFragment();
    if (this.data.length > 0) {
      this.data.forEach((item) => {
        const li = new Creator(itemParams);
        imgParams.attr.src = item.urls.regular;
        const img = new Creator(imgParams);
        li.getElement().append(img.getElement());
        template.append(li.getElement());
        this.element.append(template);
      });
    }
  }

  #clean() {
    this.element.innerHTML = "";
  }
}
