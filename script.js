let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    digitalElement.innerHTML = `${hours}:${minutes}:${seconds}`;

    sElement.style.transform = `rotate(${seconds * 6 - 90}deg)`;
    mElement.style.transform = `rotate(${minutes * 6 + seconds / 10 - 90}deg)`;
    hElement.style.transform = `rotate(${hours * 30 + minutes / 2 - 90}deg)`;
}

setInterval(updateClock, 1000);
updateClock()