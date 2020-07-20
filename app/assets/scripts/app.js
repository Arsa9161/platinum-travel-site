import "../style/style.css";
import elements from "./view/base";
import MobileMenu from "./model/mobileApp";

const mobileMenu = new MobileMenu();
mobileMenu.menu_icon.addEventListener("click", (e) => {
  mobileMenu.toggleContent();
  mobileMenu.toggleHeader();
});
