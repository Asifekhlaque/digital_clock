function displayTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    var session = document.getElementById("ampm");
    if (hours >= 12) {
        session.innerHTML = "PM";
    }
    else {
        session.innerHTML = "AM";
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
setInterval(displayTime, 10);