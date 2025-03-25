import Creator from "../utilities/creator.js";

const testParams = {
  tagName: "div",
  classList: ["a", "b", "c"],
};

export default class View {
  constructor() {
    this.testElement = new Creator(testParams);
    console.log(this.testElement.getElement());
  }
}

// 1. набить компонентами
