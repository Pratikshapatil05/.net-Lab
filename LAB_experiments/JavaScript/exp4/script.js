function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let valid = true;

    // Clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passError").innerText = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerText = "Enter valid email";
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passError").innerText = "Min 6 characters required";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
    }

    return valid;
}