import { render } from "../utilits/templating.js";
import { api } from "../server/api.js";
export class LoginComponent {
  constructor(template, containerEl) {
    this._template = template;
    this._containerEl = containerEl;

    this.render();
  }
  onSubmit() {
    const email = this._containerEl.querySelector("#email_field").value;
    const password = this._containerEl.querySelector("#password_field").value;

    api.login(email, password).then((e) => {
      this.onSuccess && this.onSuccess(e.token);
      localStorage.setItem("token", e.token);
    });
  }
  render() {
    if (!this._containerEl) return;
    this._containerEl.innerHTML = render(this._template, {});
    this._containerEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-submit")) this.onSubmit(e);
    });
  }
}
