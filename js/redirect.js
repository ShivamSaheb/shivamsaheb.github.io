// Countdown time in seconds
let countdownTime = 5;

// Reference to countdown element
const countdownElement = document.getElementById("countdown");

// Update countdown every second
const timer = setInterval(() => {
    countdownTime--;
    countdownElement.textContent = countdownTime;

    if (countdownTime <= 0) {
        clearInterval(timer);
        window.location.href = "html/index.html"; // Redirect to main site
    }
}, 1000);
