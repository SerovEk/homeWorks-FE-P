import { LoginComponent } from "./components/login.js";
import { UserListComponent } from "./components/userList.js";

const containerEl = document.getElementById("main");

if (localStorage.getItem("token")) {
  onSuccessLogin();
} else {
  onLoginPageLoad();
}

function onSuccessLogin() {
  const userList = new UserListComponent(
    document.getElementById("user_list_template").innerText,
    document.getElementById("user_card_template").innerText,
    containerEl
  );
}
function onLoginPageLoad() {
  const login = new LoginComponent(
    document.getElementById("login_template").innerText,
    containerEl
  );
  login.onSuccess = onSuccessLogin;
}

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

import { render } from "../utilits/templating.js";
import { api } from "../server/api.js";

export class UserListComponent {
  constructor(template, cardTamplate, containerEl) {
    this._template = template;
    this._userCardTamplate = cardTamplate;
    this._containerEl = containerEl;

    this.list = [];

    this.onSuccess = () => {};

    this.loadUserList();
  }
    loadUserList(page = 1) {
  api.getUsers(page).then(({ data, total_pages }) => {
    this.list = data;
    this.render();
  });
}
   render() {
   if (!this._containerEl) return;
   this._containerEl.innerHTML = render(this._template, {});
   const listEl = this._containerEl.querySelector("#user-list");
   listEl.innerHTML = this.list
     .map((e) => ({ ...e, name: `${e.first_name} ${e.last_name}` }))
     .map((e) => render(this._userCardTamplate, e))
     .join("");
 }
}

export const api = (() => {
  const API_URL = "https://reqres.in/api";

  class Api {
    constructor() {
    }
    login(email, password) {
      return fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          password
        })
      }).then(response => response.json());
    };
    getUsers(page = 1) {
      return fetch(`${API_URL}/users?page{page}`).then(response => response.json())
    };
  }
  return new Api();
})();


export const render = (template, binding) => {
  let result = template;
  Object.keys(binding).forEach((e) => {
    result = result.replaceAll(`{{${e}}}`, binding[e]);
  });
  return result;
};
