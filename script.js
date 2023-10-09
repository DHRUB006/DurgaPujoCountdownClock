let countDownTime = new Date('Oct 20, 2023 00:00:00').getTime();

function durgaPujo() {
    let nowTime = new Date().getTime();
    let diff = countDownTime - nowTime;

    let sec = 1000;
    let min = sec * 60;
    let hr = min * 60;
    let day = hr * 24;

    let d = Math.floor(diff / day);
    // console.log(d);
    let h = Math.floor((diff % day) / hr);
    // console.log(h);
    let m = Math.floor((diff % hr) / min);
    // console.log(m);
    let s = Math.floor((diff % min) / sec);
    // console.log(s);

    document.getElementById('Days').innerText = addZero(d);
    document.getElementById('Hours').innerText = addZero(h);
    document.getElementById('Minutes').innerText = addZero(m);
    document.getElementById('Seconds').innerText = addZero(s);
}

setInterval(function () {
    durgaPujo();
}, 1000);

function addZero(num) {
    if (num < 10)
        return `0${num}`;
    else
        return num;
}

// Create the Instagram link element
var instagramLink = document.createElement('a');
instagramLink.href = 'https://www.instagram.com/dhrubajyoti.official/';
instagramLink.target = '_blank';
instagramLink.textContent = 'dhrubajyoti.official';

// Create the container div for the Instagram link
var instagramLinkContainer = document.createElement('div');
instagramLinkContainer.id = 'instagram-link';
instagramLinkContainer.appendChild(instagramLink);

// Append the Instagram link container to the designated element
var instagramContainer = document.getElementById('instagram-link-container');
if (instagramContainer) {
    instagramContainer.appendChild(instagramLinkContainer);
}