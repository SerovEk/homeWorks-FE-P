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
