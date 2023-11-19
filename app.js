const secondBar = document.querySelector('.second-bar');
const minuteBar = document.querySelector(".minute-bar");
const hourBar = document.querySelector(".hour-bar");


function setTime(){
    const presentTime = new Date();

    const timeSecond = presentTime.getSeconds();
    const secDegrees = ((timeSecond / 60)*360)+90;
    secondBar.style.transform = `rotate(${secDegrees}deg)`;

    const timeMinute = presentTime.getMinutes();    
    const minDegrees = ((timeMinute / 60) * 360) + ((timeSecond /60) * 6) + 90;
    minuteBar.style.transform = `rotate(${minDegrees}deg)`;


    const timeHour = presentTime.getHours();
    const hourDegrees = ((timeHour / 12) * 360) + ((timeMinute /60) * 30) + 90;
    hourBar.style.transform = `rotate(${hourDegrees}deg)`;

    
}

setInterval(setTime, 1000);

setTime();