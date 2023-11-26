let timer;
let isRunning = false;
let hundredths = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

const pauseSound = new Audio('./sound/mouse_click_sound.mp3');
const intervalSound = new Audio('./sound/click_click.mp3');

function startPauseTimer() {
    if (!isRunning) {
        timer = setInterval(updateTimer, 10);
        document.getElementById("controlButton").textContent = "Pauza";
        isRunning = true;
        pauseSound.play()
    } else {
        clearInterval(timer);
        document.getElementById("controlButton").textContent = "Pokreni";
        isRunning = false;
        pauseSound.play()
    }
    const shakeImage = document.getElementById("shakeImage");
    shakeImage.classList.toggle("img-animation", isRunning);
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById("controlButton").textContent = "Pokreni";
    isRunning = false;
    hundredths = seconds = minutes = hours = 0;
    updateDisplay();
    pauseSound.play()
    const shakeImage = document.getElementById("shakeImage");
    shakeImage.classList.toggle("img-animation", isRunning);
}

function updateTimer() {
    hundredths++;
    if (hundredths === 100) {
        hundredths = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    updateDisplay();


    if (seconds % 10 === 0 && hundredths === 0) {
        intervalSound.play();
    }
}

function updateDisplay() {
    document.querySelector(".hundredth").textContent = hundredths.toString().padStart(2, '0');
    document.querySelector(".second").textContent = seconds.toString().padStart(2, '0');
    document.querySelector(".minutes").textContent = minutes.toString().padStart(2, '0');
    document.querySelector(".hours").textContent = hours.toString().padStart(2, '0');
}

document.getElementById("controlButton").addEventListener("click", startPauseTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);