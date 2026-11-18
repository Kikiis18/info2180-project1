/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function() {
     var newsletterForm = document.querySelector(".newsletter form");
     var emailInput = document.getElementById("email");
     var messageArea = document.querySelector(".message");

     newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var emailAddress = emailInput.value.trim();

        if (emailAddress === "") {
            messageArea.textContent = "Please enter your email address.";
        } else {
            messageArea.textContent = "Thank you!" + emailAddress + " for subscribing to our newsletter!";
        } 
    });
});