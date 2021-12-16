class UserListComponent {
  constructor(template, cardTamplate, containerEl) {
    this._template = template;
    this._userCardTamplate = cardTamplate;
    this._containerEl = containerEl;

    this.list = [];

    this.onSuccess = () => {};

    this.loadUserList();
  }
  loadUserList(page = 1) {
    api.getUsers(page, (users, pages) => {
      this.list = users;
      this.render();
    });
  };
  render() {
    if (!containerEl) return;
    this._containerEl.innerHTML = render(this._template, {});

    const listEl = this._containerEl.querySelector("#user-list");
    listEl.innerHTML = this.list
      .map((e) => ({ ...e, name: `${e.first_name} ${e.last_name}` }))
      .map((e) => this.render(this._userCardTamplate, e))
      .join("");
    // this._containerEl.addEventListener("click", (e) => {
    //   if (e.target.classList.contains("btn-submit")) this.onSubmit(e);
    // });
  }
};

