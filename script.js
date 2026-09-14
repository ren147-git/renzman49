
document.addEventListener("DOMContentLoaded", () => {
    

    const myButton = document.getElementById("actionButton");
    const myStatus = document.getElementById("statusText");

    
    myButton.addEventListener("click", () => {

        myStatus.textContent = "🎉 The JavaScript is working perfectly!";
        myStatus.style.color = "#2ecc71";
    });
});
