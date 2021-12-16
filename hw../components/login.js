class LoginComponent {
    constructor(template, containerEl) {
        this._template = template;
        this._containerEl = containerEl;

        this.render()
    };
    onSubmit() {
        console.dir(this._containerEl);
        const email = this._containerEl.querySelector("#email_field").value;
        const password = this._containerEl.querySelector("#password_field").value;
        console.log(email, password);

        api.login(email, password, (response) => {
            console.log(response);
            if (response.token) {
                this.onSuccess && this.onSuccess(response.token)
            }
        });
    };
    render() {
        if (!this._containerEl) return;
        this._containerEl.innerHTML = render(this._template, {});
        this._containerEl.addEventListener('click', (e) => {
            if (e.target.classList.contains("btn-submit")) this.onSubmit(e);
        })
    };
};