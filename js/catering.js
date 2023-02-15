var reserverFirstName = document.getElementById("signupfname")
var reserverLastName = document.getElementById("signuplname")
var reserverEmail = document.getElementById("signupemail")
var reserverPhone = document.getElementById("signupphone")
var reserveGuestsNum = document.getElementById("guestsnum")
var reservationType = document.getElementById("restype")
var reservationDate = document.getElementById("resdate")
var reservationButton = document.getElementById("reserve")
var checkInput = document.getElementById("checkInput")


reservationButton.addEventListener("click", request);
reserverFirstName.addEventListener("keyup", validationFirstName);
reserverLastName.addEventListener("keyup", validationLastName);
reserverEmail.addEventListener("keyup", validationEmail);
reserveGuestsNum.addEventListener("keyup", validationGuests);
reserverPhone.addEventListener("keyup", validationPhone);

function request() {
    if (reserverFirstName.value == "" || reserverLastName.value == "" || reserverEmail.value == "" || reserverPhone.value == "" || reserveGuestsNum.value == "" || reservationType.value == "" || reservationDate.value == "") {
        reservationButton.disabled = "true";
        checkInput.classList.remove("d-none");
    } else {
        reservationButton.removeAttribute("disabled");
        checkInput.classList.add("d-none");
    }
}

function validationFirstName() {
    var nameRejex = /^[A-Z][a-z/s]{2,10}$/;
    if (!nameRejex.test(reserverFirstName.value)) {
        reservationButton.disabled = "true";
        reserverFirstName.classList.add("is-invalid");
        reserverFirstName.classList.remove("is-valid");

    } else {
        reservationButton.removeAttribute("disabled");
        reserverFirstName.classList.remove("is-invalid");
        reserverFirstName.classList.add("is-valid");
    }
}

function validationLastName() {
    var nameRejex = /^[A-Z][a-z/s]{2,10}$/;
    if (!nameRejex.test(reserverLastName.value)) {
        reservationButton.disabled = "true";
        reserverLastName.classList.add("is-invalid");
        reserverLastName.classList.remove("is-valid");

    } else {
        reservationButton.removeAttribute("disabled");
        reserverLastName.classList.remove("is-invalid");
        reserverLastName.classList.add("is-valid");
    }
}

function validationEmail() {
    var emailRejex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRejex.test(reserverEmail.value)) {
        reservationButton.disabled = "true";
        reserverEmail.classList.add("is-invalid");
        reserverEmail.classList.remove("is-valid");
    } else {
        reservationButton.removeAttribute("disabled");
        reserverEmail.classList.remove("is-invalid");
        reserverEmail.classList.add("is-valid");
    }
}

function validationPhone() {
    var phoneRejex = /^(010|011|012|015)[0-9]{8}$/;
    if (!phoneRejex.test(reserverPhone.value)) {
        reservationButton.disabled = "true";
        reserverPhone.classList.add("is-invalid");
        reserverPhone.classList.remove("is-valid");
    } else {
        reservationButton.removeAttribute("disabled");
        reserverPhone.classList.remove("is-invalid");
        reserverPhone.classList.add("is-valid");
    }
}

function validationGuests() {
    var guestsRejex = /^[1-9]{1}$|^[1-3]{1}[0-6]{1}$|^36$/;
    if (!guestsRejex.test(reserveGuestsNum.value)) {
        reservationButton.disabled = "true";
        reserveGuestsNum.classList.add("is-invalid");
        reserveGuestsNum.classList.remove("is-valid");
    } else {
        reservationButton.removeAttribute("disabled");
        reserveGuestsNum.classList.remove("is-invalid");
        reserveGuestsNum.classList.add("is-valid");
    }
}