import elements from "../view/base";
export default class MobileMenu {
  constructor() {
    this.menu_icon = elements.menu_icon;
    this.menu_content = elements.menu_content;
    this.section_header = elements.section_header;
  }
  toggleContent() {
    this.menu_content.classList.toggle("section-header__content--active");
  }
  toggleHeader() {
    this.section_header.classList.toggle("section-header--active");
  }
}
