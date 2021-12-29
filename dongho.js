//StopWatch
function Stopwatch(elem) {
    var time = 0;
    var offset;
    var interval;
    var lapContainer=document.querySelector('.lapContainer');
    function lapOn() {
        var lapTime = lapContainer.appendChild(document.createElement("li"))
        lapTime.innerHTML = elem.textContent;
        lapTime.classList = 'lapItem'
    }

    function lapOff() {
        return;
    }

    function update() {
        if (this.isOn) {
            time += delta();
        }
        elem.textContent = timeFormatter(time);
    }

    function delta() {
        var now = Date.now();
        var timePassed = now - offset;

        offset = now;

        return timePassed;
    }

    function timeFormatter(time) {
        time = new Date(time);

        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();

        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }

        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }

        while (milliseconds.length < 3) {
            milliseconds = '0' + milliseconds;
        }

        var result = minutes + ' : ' + seconds + ' . ' + milliseconds;

        return result;
    }

    this.start = function () {
        interval = setInterval(update.bind(this), 1);
        offset = Date.now();
        this.isOn = true;
    };

    this.lapOn = function () {
        lapOn();
    }

    this.lapOff = function () {
        lapOff();
    }

    this.isOn = false;
}

//Main
var timer = document.querySelector('.timer');
var toggleBtn = document.querySelector('.toggle');
var lapBtn = document.querySelector('.lap');

var watch = new Stopwatch(timer);

function start() {
    toggleBtn.classList.toggle("on");
    watch.start();
}


toggleBtn.addEventListener('click', function () {
    watch.isOn ? stop() : start();
});


lapBtn.addEventListener('click', function () {
    watch.isOn ? watch.lapOn() : watch.lapOff();
})