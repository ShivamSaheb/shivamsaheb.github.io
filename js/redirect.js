// Countdown redirect script
let countdownTime = 5;
const countdownElement = document.getElementById("countdown");

const timer = setInterval(() => {
    countdownTime--;
    countdownElement.textContent = countdownTime;

    if (countdownTime <= 0) {
        clearInterval(timer);
        window.location.href = "html/index.html";
    }
}, 1000);
