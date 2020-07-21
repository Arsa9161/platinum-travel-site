import "../style/style.css";
import elements from "./view/base";
import MobileMenu from "./model/mobileApp";
import RevealOnScroll from "./model/revealOnScroll";
import StickyHeader from "./model/stickyHeader";

new MobileMenu();
new RevealOnScroll(elements.feature_items, 75);
new RevealOnScroll(elements.testimonials, 50);
new StickyHeader();
