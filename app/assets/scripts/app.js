import "../style/style.css";
import elements from "./view/base";
import MobileMenu from "./model/mobileApp";
import RevealOnScroll from "./model/revealOnScroll";
import StickyHeader from "./model/stickyHeader";

new MobileMenu();
new RevealOnScroll(elements.feature_items, 75);
new RevealOnScroll(elements.testimonials, 50);
new StickyHeader();

let modal;

elements.open_modal_btns.forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal === "undefined") {
      import(/* webpackChunkName: "modal"*/ "./model/modal")
        .then((r) => {
          modal = new r.default();
          setTimeout(() => {
            modal.openModal();
          }, 20);
        })
        .catch(console.log("file importing error"));
    } else {
      modal.openModal();
    }
  })
);
