function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    // indicates AM/PM

    if (hrs >= 12) {
        session.innerHTML = "PM";
    } else {
        session.innerHTML = "AM";
    }

    // changes time from military time

    if (hrs > 12) {
        hrs = hrs - 12;
    }
    // when seconds are under 10 seconds sets it to double digits

    if (min < 10) {
        min = '0' + min
    }
    if (sec < 10) {
        sec = '0' + sec
    }

    // code that grabs info from <span> from html

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

}
setInterval(displayTime, 1000);