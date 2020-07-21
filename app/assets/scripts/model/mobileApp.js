import elements from "../view/base";
export default class MobileMenu {
  constructor() {
    this.menu_icon = elements.menu_icon;
    this.menu_content = elements.menu_content;
    this.section_header = elements.section_header;
    this.events();
  }
  events() {
    this.menu_icon.addEventListener("click", (e) => {
      this.toggleMenu();
    });
  }
  toggleContent() {
    this.menu_content.classList.toggle("section-header__content--active");
  }
  toggleHeader() {
    this.section_header.classList.toggle("section-header--active");
  }
  toggleMenuIcon() {
    this.menu_icon.classList.toggle("section-header__menu-icon--x");
  }
  toggleMenu() {
    this.toggleContent();
    this.toggleHeader();
    this.toggleMenuIcon();
  }
}
