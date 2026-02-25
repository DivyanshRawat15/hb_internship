let timerId;
let startTime;
let elapsedTime = 0;
let isRunning = false;
let lapNumber = 0;
let lastLapTime = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const lapResetBtn = document.getElementById('lapResetBtn');
const lapsList = document.getElementById('laps');

// Function to format time in HH:MM:SS.mmm format
function formatTime(milliseconds) {
    const date = new Date(milliseconds);
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const millisecs = date.getUTCMilliseconds();
    const hours = date.getUTCHours();

    return (
        hours.toString().padStart(2, '0') + ':' +
        minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0') + '.' +
        millisecs.toString().padStart(3, '0')
    );
}

// Function to update the display
function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
    // Recursively call updateDisplay using setTimeout for continuous updates
    timerId = setTimeout(updateDisplay, 10); // Update every 10ms for better precision than 1 second
}

// Start/Stop button logic
startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        // Stop the timer
        clearTimeout(timerId);
        isRunning = false;
        startStopBtn.textContent = 'Start';
        lapResetBtn.textContent = 'Reset';
    } else {
        // Start or resume the timer
        startTime = Date.now() - elapsedTime; // Adjust startTime for resuming
        updateDisplay();
        isRunning = true;
        startStopBtn.textContent = 'Stop';
        lapResetBtn.textContent = 'Lap';
    }
});

// Lap/Reset button logic
lapResetBtn.addEventListener('click', () => {
    if (isRunning) {
        // Lap functionality
        lapNumber++;
        const currentLapTime = elapsedTime - lastLapTime;
        lastLapTime = elapsedTime;

        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapNumber}: ${formatTime(currentLapTime)}`;
        lapsList.prepend(lapItem); // Add new lap to the top of the list
    } else {
        // Reset functionality
        clearTimeout(timerId);
        elapsedTime = 0;
        lastLapTime = 0;
        lapNumber = 0;
        display.textContent = '00:00:00.000';
        lapsList.innerHTML = '';
        lapResetBtn.textContent = 'Lap';
    }
});
