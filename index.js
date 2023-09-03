const hourS = document.getElementById("hours");
const minuteS = document.getElementById("minutes");
const secondS = document.getElementById("seconds");
const aMpM = document.getElementById("ampm");


function updateClock() {

    let curDate = new Date();

    let hou = curDate.getHours();
    let min = curDate.getMinutes();
    let sec = curDate.getSeconds();
    let ampm = "AM";


    if (hou > 12) {
        hou = hou - 12;
        ampm = "PM";
    }

    hou = hou < 10 ? "0" + hou : hou;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    hourS.innerText = hou;
    minuteS.innerText = min;
    secondS.innerText = sec;
    aMpM.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);

}

updateClock();