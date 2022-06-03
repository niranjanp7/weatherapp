const clock = document.querySelector(".clock");

const utc = 5.5*60;

function updateTime() {
    const time = new Date();
    time.setTime(time.getTime() + time.getTimezoneOffset()*60000 + utc*60000);

    clock.style.setProperty("--hour", time.getHours());
    clock.style.setProperty("--minute", time.getMinutes());
    clock.style.setProperty("--second", time.getSeconds());
}

setInterval(updateTime, 1000);
