import throttle from "lodash/throttle";
// todorhoi hugatsaa bolgond functioniig duudna. ene ni event deer duudaj bui toog bagasgaj ugnu
import debounce from "lodash/debounce";

export default class RevealOnScroll {
  constructor(items_to_reveal, reveal_at_point) {
    this.items_to_reveal = items_to_reveal;
    this.reveal_at_point = reveal_at_point;
    this.browser_height = window.innerHeight;
    this.scrollThrottle = throttle(this.callerCalculate, 200).bind(this);
    this.hideInitially();
    this.events();
  }
  hideInitially() {
    this.items_to_reveal.forEach((el) => {
      el.classList.add("reveal-item");
      el.isAcitve = false;
    });
    this.items_to_reveal[this.items_to_reveal.length - 1].isLast = true;
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle);
    window.addEventListener(
      "resize",
      debounce(() => (this.browser_height = window.innerHeight)),
      333
    );
  }
  callerCalculate() {
    console.log("scroll event");
    this.items_to_reveal.forEach((el) => {
      if (!el.isAcitve) {
        this.calculateIfScrolledTo(el);
      }
    });
  }
  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browser_height > el.offsetTop) {
      console.log("tootsoolj bn");

      let el_point_as_percent =
        (el.getBoundingClientRect().y / this.browser_height) * 100;

      if (el_point_as_percent < this.reveal_at_point) {
        el.classList.add("reveal-item--active");
        el.isAcitve = true;
        if (el.isLast) {
          window.removeEventListener("scroll", this.scrollThrottle);
        }
      }
    }
  }
}
