var logInEmail = document.getElementById("signinemail")
var logInPass = document.getElementById("signinpass")
var logInButton = document.getElementById("logInButton")

logInButton.addEventListener("click", signin);
logInEmail.addEventListener("keyup", validationEmail);
logInPass.addEventListener("keyup", validationPass);

function signin() {
    if (logInEmail.value == "" || logInPass.value == "") {
        alert("Email and Password Required")
        logInButton.disabled = "true";
    } else {
        logInButton.removeAttribute("disabled");
    }
}

function validationEmail() {
    var emailRejex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRejex.test(logInEmail.value)) {
        logInButton.disabled = "true";
        logInEmail.classList.add("is-invalid");
        logInEmail.classList.remove("is-valid");
    } else {
        logInButton.removeAttribute("disabled");
        logInEmail.classList.remove("is-invalid");
        logInEmail.classList.add("is-valid");
    }
}

function validationPass() {
    var passRejex = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{4,15}$/;
    if (!passRejex.test(logInPass.value)) {
        logInButton.disabled = "true";
    } else {
        logInButton.removeAttribute("disabled");
    }
}

