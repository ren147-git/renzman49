const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    if (fullName === "" || email === "" || password === "") {

        message.textContent = "Please complete all fields.";
        message.style.color = "red";

    } else {

        message.textContent = "Registration successful!";
        message.style.color = "green";

    }
});