var userFirstName = document.getElementById("signupfname")
var userLastName = document.getElementById("signuplname")
var userEmail = document.getElementById("signupemail")
var userPass = document.getElementById("signuppass")
var userPhone = document.getElementById("signupphone")
var userFirstNameCheck = document.getElementById("firstNameAlert")
var userLastNameCheck = document.getElementById("lastNameAlert")
var userEmailCheck = document.getElementById("emailAlert")
var userPassCheck = document.getElementById("passAlert")
var userPhoneCheck = document.getElementById("phoneAlert")
var inputCheck = document.getElementById("checkInput")
var signUpButton = document.getElementById("signup")
var checkInput = document.getElementById("checkInput");

signUpButton.addEventListener("click", signUp);
userFirstName.addEventListener("keyup", validationFirstName);
userLastName.addEventListener("keyup", validationLastName);
userEmail.addEventListener("keyup", validationEmail);
userPass.addEventListener("keyup", validationPass);
userPhone.addEventListener("keyup", validationPhone);


function signUp() {
    if (userFirstName.value == "" || userLastName.value == "" || userEmail.value == "" || userPass.value == "" || userPhone.value == "") {
        inputCheck.classList.remove("d-none");
        signUpButton.disabled = "true";
    } else {
        inputCheck.classList.add("d-none");
        signUpButton.removeAttribute("disabled");
    }
}

function validationFirstName() {
    var nameRejex = /^[A-Z][a-z/s]{2,10}$/;
    if (!nameRejex.test(userFirstName.value)) {
        signUpButton.disabled = "true";
        userFirstName.classList.add("is-invalid");
        userFirstName.classList.remove("is-valid");
        userFirstNameCheck.classList.remove("d-none");

    } else {
        signUpButton.removeAttribute("disabled");
        userFirstName.classList.remove("is-invalid");
        userFirstName.classList.add("is-valid");
        userFirstNameCheck.classList.add("d-none");
    }
}

function validationLastName() {
    var nameRejex = /^[A-Z][a-z/s]{2,10}$/;
    if (!nameRejex.test(userLastName.value)) {
        signUpButton.disabled = "true";
        userLastName.classList.add("is-invalid");
        userLastName.classList.remove("is-valid");
        userLastNameCheck.classList.remove("d-none");
        

    } else {
        signUpButton.removeAttribute("disabled");
        userLastName.classList.remove("is-invalid");
        userLastName.classList.add("is-valid");
        userLastNameCheck.classList.add("d-none");
    }
}

function validationEmail() {
    var emailRejex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRejex.test(userEmail.value)) {
        signUpButton.disabled = "true";
        userEmail.classList.add("is-invalid");
        userEmail.classList.remove("is-valid");
        userEmailCheck.classList.remove("d-none");
    } else {
        signUpButton.removeAttribute("disabled");
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        userEmailCheck.classList.add("d-none");
    }
}

function validationPass() {
    var passRejex = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{4,15}$/;
    if (!passRejex.test(userPass.value)) {
        signUpButton.disabled = "true";
        userPass.classList.add("is-invalid");
        userPass.classList.remove("is-valid");
        userPassCheck.classList.remove("d-none");
    } else {
        signUpButton.removeAttribute("disabled");
        userPass.classList.remove("is-invalid");
        userPass.classList.add("is-valid");
        userPassCheck.classList.add("d-none");
    }
}

function validationPhone() {
    var phoneRejex = /^(010|011|012|015)[0-9]{8}$/;
    if (!phoneRejex.test(userPhone.value)) {
        signUpButton.disabled = "true";
        userPhone.classList.add("is-invalid");
        userPhone.classList.remove("is-valid");
        userPhoneCheck.classList.remove("d-none");
    } else {
        signUpButton.removeAttribute("disabled");
        userPhone.classList.remove("is-invalid");
        userPhone.classList.add("is-valid");
        userPhoneCheck.classList.add("d-none");
    }
}