import "../style/style.css";
import elements from "./view/base";
import MobileMenu from "./model/mobileApp";
import RevealOnScroll from "./model/revealOnScroll";

new MobileMenu();
new RevealOnScroll(elements.feature_items, 75);
new RevealOnScroll(elements.testimonials, 50);
