(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{18:function(s,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return o}));var a=e(0);function i(s,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(s,a.key,a)}}var o=function(){function s(){!function(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}(this,s),this.insertModalHtml(),this.modal=document.querySelector(a.a.selector_strings.modal),this.close_icon=document.querySelector(a.a.selector_strings.modal_close),this.events()}var n,e,o;return n=s,(e=[{key:"insertModalHtml",value:function(){document.body.insertAdjacentHTML("beforeend",'\n      <div class="modal">\n      <div class="modal__inner">\n        <h2\n          class="section-title section-title--blue section-title--less-margin"\n        >\n          <img src="assets/images/icons/mail.svg" class="section-title__icon" />\n          Хамт <strong>Аялах</strong>\n        </h2>\n        <div class="wrapper wrapper--narrow">\n          <p class="modal__description">\n            Бид тун удахгүй онлайнаар захиалга өгөх системийг нээх бөгөөд, та\n            одоогоор доорхи сошиал платформуудаар дамжиуулж бидэнтэй холбогдох\n            боломжтой!\n          </p>\n        </div>\n\n        <div class="social-icons">\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/facebook.svg" alt="Facebook"\n          /></a>\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/twitter.svg" alt="Twitter"\n          /></a>\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/instagram.svg" alt="Instagram"\n          /></a>\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/youtube.svg" alt="YouTube"\n          /></a>\n        </div>\n      </div>\n      <div class="modal__close">X</div>\n    </div>\n      ')}},{key:"openModal",value:function(){this.modal.classList.add("modal--active")}},{key:"closeModal",value:function(){this.modal.classList.remove("modal--active")}},{key:"events",value:function(){var s=this;this.close_icon.addEventListener("click",(function(n){return s.closeModal()}))}}])&&i(n.prototype,e),o&&i(n,o),s}()}}]);