const loginForm = document.getElementById("login");
const loginButton = document.getElementById("login-form-submit");


loginButton.addEventListener("click", (callBack) => {
  callBack.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "12345") {
        alert("You have successfully logged in.");
        newFunction();
    } else {
        alert("wrong password or user name")
}

function newFunction() {
  location = "HOME.HTML";
}
})