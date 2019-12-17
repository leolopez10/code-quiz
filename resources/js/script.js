var secondsEl = document.querySelector("#seconds");
var startBtn = document.querySelector("#startButton");


startBtn.addEventListener("click", function () {
    var timeLeft = 75;
    var countDownTimer = setInterval(function () {
        secondsEl.innerHTML = timeLeft;
        timeLeft -= 1;
        if (timeLeft <= 0) {
            clearInterval(countDownTimer);
        }
    }, 1000);
})



