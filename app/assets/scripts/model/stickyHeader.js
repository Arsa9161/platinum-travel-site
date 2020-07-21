import elements from "../view/base";
import throttle from "lodash/throttle";

export default class StickyHeader {
  constructor() {
    this.section_header = elements.section_header;
    this.events();
  }
  events() {
    window.addEventListener(
      "scroll",
      throttle(() => this.changeColorHeader(), 200)
    );
  }
  changeColorHeader() {
    console.log("header");
    if (window.scrollY > 60) {
      this.section_header.classList.add("section-header--dark");
    } else {
      this.section_header.classList.remove("section-header--dark");
    }
  }
}
