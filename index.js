var d, hours, seconds, minutes, HourRotation, minutesRotation, secondsRotation;
let secondsHand = document.querySelector('#seconds-hand');
let hoursHand = document.querySelector('#hours-hand');
let minutesHand = document.querySelector('#minutes-hand');
setInterval(function() {
    d = new Date();
    hours = d.getHours();
    seconds = d.getSeconds();
    minutes = d.getMinutes();
    HourRotation = 30 * hours + minutes / 2;
    minutesRotation = 6 * minutes;
    secondsRotation = 6 * seconds;

    secondsHand.style.transform = `rotate(${secondsRotation}deg)`;
    hoursHand.style.transform = `rotate(${HourRotation}deg)`;
    minutesHand.style.transform = `rotate(${minutesRotation}deg)`;
}, 1000);