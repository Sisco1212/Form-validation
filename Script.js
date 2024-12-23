let nameError = document.getElementById("name-error"),
phoneError = document.getElementById("phone-error"),
emailError = document.getElementById("email-error"),
messageError = document.getElementById("message-error"),
submitError = document.getElementById("submit-error");

const validateName = () => {
    let name = document.getElementById("contact-name").value;

    if(name.length == 0) {
        nameError.innerHTML = "name is required";
        return false;
    }

    if(!name.match(/^[A-za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "name invalid";
        return false;
    }

    nameError.innerHTML = "<i> valid </i>";
    return true;
}

const validatePhone = () => {
    let phone = document.getElementById("contact-phone").value;

    if (phone.length == 0) {
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if (phone.length !== 11) {
        phoneError.innerHTML = "enter 11 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = "Only digits";
        return false;
    }
    phoneError.innerHTML = "<i> valid </i>";
    return true;
}

const validateEmail = () => {
    let email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Invalid email";
        return false;
    }

    emailError.innerHTML = "<i> valid </i>";
    return true;
}

const validateMessage = () => {
    let message = document.getElementById("contact-message").value;
    let required = 30;
    let left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + " more characters required";
        return false;
    }

    messageError.innerHTML = "<i> valid </i>";
    return true;
}

const validateForm = () => {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = "Fix all errors to continue";
        setTimeout(() => {
            submitError.style.display = "none";
        }, 3000)
        return false;
    }
}