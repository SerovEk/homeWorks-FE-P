const containerEl = document.getElementById('main');

const login = new LoginComponent(
  document.getElementById("login_template").innerText,
    containerEl,
);

login.onSuccess = onSuccessLogin;

function onSuccessLogin() {
    const userList = new UserListComponent(
      document.getElementById("user_list_template").innerText,
      document.getElementById("user_card_template").innerText,

      containerEl
    );
}