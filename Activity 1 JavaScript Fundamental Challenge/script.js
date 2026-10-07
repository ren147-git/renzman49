function showGreeting() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let message = "";

    if (age < 18) {
        message = "You are a minor.";
    } else {
        message = "You are an adult.";
    }

    document.getElementById("result").innerHTML =
        "Hello, " + name + "! " + message;
}