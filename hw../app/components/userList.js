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
