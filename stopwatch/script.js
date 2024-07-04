let startTime; 

let updatedTime; 

let difference; 

let tInterval; 

let running = false; 

let paused = false; 

let lapNumber = 1; 

 

const startBtn = document.getElementById('start-btn'); 

const pauseBtn = document.getElementById('pause-btn'); 

const resetBtn = document.getElementById('reset-btn'); 

const lapBtn = document.getElementById('lap-btn'); 

const timeDisplay = document.getElementById('time-display'); 

const lapList = document.getElementById('lap-list'); 

 

startBtn.addEventListener('click', start); 

pauseBtn.addEventListener('click', pause); 

resetBtn.addEventListener('click', reset); 

lapBtn.addEventListener('click', lap); 

 

function start() { 

    if (!running) { 

        startTime = new Date().getTime(); 

        tInterval = setInterval(getShowTime, 1); 

        paused = false; 

        running = true; 

        startBtn.disabled = true; 

        pauseBtn.disabled = false; 

        resetBtn.disabled = false; 

        lapBtn.disabled = false; 

    } 

} 

 

function pause() { 

    if (!paused && running) { 

        clearInterval(tInterval); 

        paused = true; 

        startBtn.disabled = false; 

        pauseBtn.disabled = true; 

    } 

} 

 

function reset() { 

    clearInterval(tInterval); 

    running = false; 

    paused = false; 

    startBtn.disabled = false; 

    pauseBtn.disabled = true; 

    resetBtn.disabled = true; 

    lapBtn.disabled = true; 

    lapNumber = 1; 

    lapList.innerHTML = ''; 

    timeDisplay.innerHTML = '00:00:00.000'; 

} 

 

function lap() { 

    if (running) { 

        const lapTime = document.createElement('li'); 

        lapTime.innerHTML = `Lap ${lapNumber++}: ${timeDisplay.innerHTML}`; 

        lapList.appendChild(lapTime); 

    } 

} 

 

function getShowTime() { 

    updatedTime = new Date().getTime(); 

    difference = updatedTime - startTime; 

 

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 

    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); 

    let seconds = Math.floor((difference % (1000 * 60)) / 1000); 

    let milliseconds = difference % 1000; 

 

    hours = (hours < 10) ? "0" + hours : hours; 

    minutes = (minutes < 10) ? "0" + minutes : minutes; 

    seconds = (seconds < 10) ? "0" + seconds : seconds; 

    milliseconds = (milliseconds < 10) ? "00" + milliseconds : (milliseconds < 100) ? "0" + milliseconds : milliseconds; 

 

    timeDisplay.innerHTML = `${hours}:${minutes}:${seconds}.${milliseconds}`; 

} 
