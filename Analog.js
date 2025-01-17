let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let set_clock = setInterval(() => {
    let date_now = new Date();
    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();

    let calc_hr = (hr * 30) + (min/2);
    let calc_min = (min * 6) + (sec/10);
    let calc_sec = (sec * 6);

    second.style.transform = `rotate(${calc_sec}deg)`
    minute.style.transform = `rotate(${calc_min}deg)`
    hour.style.transform = `rotate(${calc_hr}deg)`
}, 0)