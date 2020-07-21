import elements from "../view/base";
import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

export default class StickyHeader {
  constructor() {
    this.section_header = elements.section_header;
    this.page_sections = elements.page_sections;
    this.previous_position = window.scrollY;
    this.browser_height = window.innerHeight;
    this.events();
  }
  events() {
    window.addEventListener(
      "scroll",
      throttle(() => this.runOnScroll(), 200)
    );
    window.addEventListener(
      "resize",
      debounce(() => (this.browser_height = window.innerHeight)),
      333
    );
  }
  runOnScroll() {
    if (window.scrollY > 60) {
      this.section_header.classList.add("section-header--dark");
    } else {
      this.section_header.classList.remove("section-header--dark");
    }
    this.checkScrollDirection();
    this.page_sections.forEach((el) => this.sectionHighlight(el));
  }

  checkScrollDirection() {
    if (this.previous_position < window.scrollY) {
      this.scroll_direction = "down";
    } else {
      this.scroll_direction = "up";
    }
    this.previous_position = window.scrollY;
  }
  sectionHighlight(el) {
    if (
      window.scrollY + this.browser_height > el.offsetTop &&
      window.scrollY < el.offsetTop + el.offsetHeight
    ) {
      let el_point_as_percent =
        (el.getBoundingClientRect().y / this.browser_height) * 100;

      if (
        (el_point_as_percent < 18 && this.scroll_direction == "down") ||
        (el_point_as_percent < 50 && this.scroll_direction == "up")
      ) {
        let matching_el_id = el.getAttribute("data-matching-link");
        document.querySelector(matching_el_id).classList.add("--active");

        document
          .querySelectorAll(`.nav-link a:not(${matching_el_id})`)
          .forEach((el) => el.classList.remove("--active"));
      }
    }
  }
}
