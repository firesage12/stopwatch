window.onload = function () {
    var hours = 00;
    var minutes = 00;
    var seconds = 00;
    var tens = 00;
    var appendHours = document.getElementById('hours');
    var appendMinutes = document.getElementById('minutes');
    var appendSeconds = document.getElementById('seconds');
    var appendTens = document.getElementById('tens');
    var startTime = document.getElementById('start');
    var stopTime = document.getElementById('stop');
    var reset = document.getElementById('restart');
    var lap = document.getElementById('lap');
    var laps = document.getElementById('laps');
    var Interval ;

    startTime.onclick = function() {
        clearInterval(Interval);
        Interval = window.setInterval(startTimer, 1);

    }
    stopTime.onclick = function() {
        clearInterval(Interval);
    }
    reset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = '00';
        minutes = '00';
        hours = '00';
        laps.innerHTML = '';
        appendTens.innerHTML = tens;
        appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
        appendHours.innerHTML = hours;
    }
    lap.onclick = function() {
        laps.innerHTML += "<li>" + appendHours.innerHTML + ":" + appendMinutes.innerHTML + ":" + appendSeconds.innerHTML + ":" + appendTens.innerHTML + "</li>";
    }

    function startTimer() {
        tens++;

        if(tens < 9){
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9){
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            apprendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
        if(seconds > 59) {
            console.log("minutes");
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
        if (minutes > 9){
            appendMinutes.innerHTML = minutes;
        }
        if(minutes > 59){
            console.log("hours");
            hours++;
            appendHours.innerHTML = "0" + hours;
            minutes = 0;
            appendMinutes.innerHTML = "0" + 0;
        }
        if (minutes > 9){
            appendHours.innerHTML = hours;
        }
    
    }
        
}
