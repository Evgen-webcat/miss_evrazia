$(document).ready(function () {
    var daysLeft = Math.floor((+new Date(2019, 2, 1) - +new Date()) / 1000 / 60 / 60 / 24);
    var dials = document.getElementsByClassName("counter");
    var lineWidth = 3;
    var borderColor = '#535353';
    var color = '#f4d476';
    var dayText = document.getElementById('days');
    var hoursText = document.getElementById('hours');
    var minutesText = document.getElementById('minutes');
    var secondText = document.getElementById('seconds');

    function percentage(number, max) {
        return (number / max) * 100;
    }

    setInterval(function () {
        var date = new Date();
        var seconds = 59 - date.getSeconds();
        var minutes = 59 - date.getMinutes();
        var hours = 23 - date.getHours();
        var days = date.getDate();
        dayText.innerText = daysLeft;
        hoursText.innerText = hours;
        minutesText.innerText = minutes;
        secondText.innerText = seconds;


        var numberA = [daysLeft, hours, minutes, seconds],
            maxA = [100, 24, 60, 60];

        for (i = 0; i < dials.length; i++) {
            var width = dials[i].querySelector('.diagram').offsetWidth - lineWidth;
            var procent = percentage(numberA[i], maxA[i]);
            var canvas = dials[i].querySelector('.diagram_circle');
            var context = canvas.getContext("2d");
            var radian = 2 * Math.PI * procent / 100;
            context.clearRect(0, 0, width + lineWidth, width + lineWidth);
            context.arc(width / 2 + lineWidth / 2, width / 2 + lineWidth / 2, width / 2, 0, 2 * Math.PI, false);
            context.lineWidth = lineWidth;
            context.strokeStyle = borderColor;
            context.stroke();
            context.beginPath();
            context.arc(width / 2 + lineWidth / 2, width / 2 + lineWidth / 2, width / 2, 1.5 * Math.PI, radian + 1.5 * Math.PI, false);
            context.strokeStyle = color;
            context.stroke();
            context.beginPath();
        }
    }, 1000);
});
