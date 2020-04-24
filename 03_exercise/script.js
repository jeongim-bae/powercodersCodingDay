var email = document.querySelectorAll("input")[0];
var password = document.querySelectorAll("input")[1];
var button = document.getElementById("btn");
const user = ["a@gmail.com", "123"]

button.addEventListener("click", login);

function login() {
    if (email.value === user[0] && password.value === user[1] ) {
        return true;
    } else {
        return false;
    }
}