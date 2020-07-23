import Axios from "axios";

export default class ClientArea {
  constructor() {
    this.insertHtml();
    this.form = document.querySelector(".client-area__form");
    this.input = document.querySelector(".client-area__input");
    this.content_area = document.querySelector(".client-area__content-area");
    this.events();
  }
  events() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.sendRequist();
    });
  }
  sendRequist() {
    Axios.post(
      "https://compassionate-villani-1c0bf5.netlify.app/.netlify/functions/secret-page",
      {
        password: this.input.value,
      }
    )
      .then((r) => {
        this.form.remove();
        this.content_area.innerHTML = r.data;
      })
      .catch((er) => {
        this.content_area.innerHTML = `<p class="client-area__error">Таны нууц үг буруу байна. </p>`;
        this.input.value = "";
        this.input.focus();
      });
  }
  insertHtml() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div class="client-area">
    <div class="wrapper wrapper--medium">
      <h2 class="section-title section-title--blue">
        Хэрэглэгчийн хуудасруу нэвтрэх
      </h2>
      <form action="" class="client-area__form">
        <input
          type="text"
          class="client-area__input"
          placeholder="нууц үгээ оруулна уу"
        />
        <button class="btn btn--orange">нэвтрэх</button>
      </form>
      <div class="client-area__content-area"></div>
    </div>
  </div>`
    );
  }
}
