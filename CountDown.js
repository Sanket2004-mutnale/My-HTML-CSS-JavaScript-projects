function startCountdown() {
    let countdownValue = 10;
    const countdownElement = document.getElementById('countdown');

    const intervalId = setInterval(() => {
        countdownElement.innerText = countdownValue;
        countdownValue--;

        if (countdownValue < 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}