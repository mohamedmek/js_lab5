const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginSuccessMsg = document.getElementById("login-success-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "123") {
        loginSuccessMsg.style.opacity = 1;
        setTimeout(function () { location.reload(1); }, 2000);


    } 
    else {
        loginErrorMsg.style.opacity = 1;
        setTimeout(function () { location.reload(1); }, 2000);

    }
})