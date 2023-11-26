var audio = new Audio('./sound/mouse_click.mp3');
var startButton = document.getElementById('Play');
var firstDiv = document.getElementById('firstDiv');
var secondDiv = document.getElementById('secondDiv');

startButton.addEventListener('click', function () {
    audio.play();

    firstDiv.classList.toggle('d-block');
    firstDiv.classList.toggle('d-none');

    secondDiv.classList.toggle('d-block');
    secondDiv.classList.toggle('d-none');
});


var audio1 = new Audio('./sound/azeri.mp3');
var audio2 = new Audio('./sound/faxo.mp3');

var audioElements = [audio1, audio2];
var currentAudioIndex = 0;
var countdownTimer;
var playButton = document.getElementById('PlayButton');
var Class = document.getElementById('class');
var class_blue = document.getElementById('blue-1');
var class_blue = document.getElementById('blue-2');
var prevButton = document.getElementById('PrevButton');
var nextButton = document.getElementById('NextButton');
var music = document.getElementById('song');
var countdownElement = document.getElementById('countdown');

playButton.addEventListener('click', function () {
    togglePlayPause();
});

prevButton.addEventListener('click', function () {
    playPreviousSound();
});

nextButton.addEventListener('click', function () {
    playNextSound();
});

audioElements[currentAudioIndex].addEventListener('loadedmetadata', function () {
    updateCountdown();
});

audioElements[currentAudioIndex].addEventListener('timeupdate', function () {
    updateCountdown();
});

// Funkcija za pustanje i stopiranje melodije

function togglePlayPause() {
    if (audioElements[currentAudioIndex].paused) {
        audioElements[currentAudioIndex].play();
        playButton.src = './img/pause.png';
        Class.classList.add('stop-class');
        Class.classList.remove('start-class');
        startCountdown();
    } else {
        audioElements[currentAudioIndex].pause();
        playButton.src = './img/play.png';
        Class.classList.add('start-class');
        Class.classList.remove('stop-class');
        clearInterval(countdownTimer);
    }

    audioElements[currentAudioIndex].addEventListener('ended', function () {
        playButton.src = './img/play.png';
        Class.classList.add('start-class');
        Class.classList.remove('stop-class');
        clearInterval(countdownTimer);
    });

    updateSongName();

}

// Zavrsetak funkcije za pustanje i stopiranje medlodije

// Funkcija pustanje sledece melodije

function playNextSound() {
    audioElements[currentAudioIndex].pause();
    currentAudioIndex = (currentAudioIndex + 1) % audioElements.length;
    audioElements[currentAudioIndex].play();
    playButton.src = './img/pause.jpg';

    if (audioElements[currentAudioIndex].paused) {
        playButton.src = './img/play.png';
        Class.classList.add('start-class');
        Class.classList.remove('stop-class');
        clearInterval(countdownTimer);
    } else {
        playButton.src = './img/pause.png';
        Class.classList.add('stop-class');
        Class.classList.remove('start-class');
        startCountdown();
    }

    audioElements[currentAudioIndex].addEventListener('ended', function () {
        playButton.src = './img/play.png';
        Class.classList.add('start-class');
        Class.classList.remove('stop-class');
        clearInterval(countdownTimer);
    });

    updateSongName();
    resetProgress();
}

// Zavrsetak funkcije za pustanje i sledece melodije

// Funkcija za vracanje na prethodnu melodiju

function playPreviousSound() {
    audioElements[currentAudioIndex].pause();
    currentAudioIndex = (currentAudioIndex - 1 + audioElements.length) % audioElements.length;
    audioElements[currentAudioIndex].play();

    playButton.src = './img/pause.png';
    if (audioElements[currentAudioIndex].paused) {
        playButton.src = './img/play.png';
        Class.classList.add('start-class');
        Class.classList.remove('stop-class');
        clearInterval(countdownTimer);
    } else {
        playButton.src = './img/pause.png';
        Class.classList.add('stop-class');
        Class.classList.remove('start-class');
        startCountdown();
    }

    audioElements[currentAudioIndex].addEventListener('ended', function () {
        playButton.src = './img/play.png';
        Class.classList.add('start-class');
        Class.classList.remove('stop-class');
        clearInterval(countdownTimer);
    });

    updateSongName();
    resetProgress();
}

//  Zavrsetak funkcije za vracanje na prethodnu melodiju

function updateSongName() {
    music.textContent = getSongName(currentAudioIndex);
}

// Funkcija za ispisivanje trenutne melodije

function getSongName(index) {
    return "Naziv melodije " + (index + 1);
}
// Xavrsetak funkcije za ispisivanje trenutne melodije

function updateCountdown() {
    var currentTime = audioElements[currentAudioIndex].currentTime;
    var duration = audioElements[currentAudioIndex].duration;

    if (!isNaN(duration)) {
        var remainingTime = duration - currentTime;
        var minutes = Math.floor(remainingTime / 60);
        var seconds = Math.floor(remainingTime % 60);

        countdownElement.textContent = formatTime(minutes) + ':' + formatTime(seconds);
    }
}

function startCountdown() {
    countdownTimer = setInterval(updateCountdown, 1000);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}


var progressContainer;

function resetProgress() {
    progressContainer.style.width = '0%';
}

document.addEventListener('DOMContentLoaded', function () {
    progressContainer = document.querySelector('.time-line #progress-bar');

    function updateProgress(audioElement) {
        var currentTime = audioElement.currentTime;
        var duration = audioElement.duration;

        if (!isNaN(duration)) {
            var percentage = (currentTime / duration) * 100;
            progressContainer.style.width = percentage + '%';
        }
    }

    audioElements.forEach(function (audioElement) {
        audioElement.addEventListener('timeupdate', function () {
            updateProgress(audioElement);
        });
    });
});



