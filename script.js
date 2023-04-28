var canvas = document.getElementsByTagName("canvas")[0];
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "rgb(46,46,46)";
context.translate(canvas.width / 2, canvas.height / 2);
var second = new Date().getSeconds();
var angle = second * 1 / 60 * (Math.PI * 2);
var radius = 100;
setInterval(function () {
    angle += 1 / 60 * (Math.PI * 2);
    angle %= Math.PI * 2;
    clearCanvas();
    drawBackground(radius);
    drawNumber(radius);
    drawSecond(angle, radius);
}, 1000);
function drawSecond(angle, radius) {
    if (radius === void 0) { radius = 100; }
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.beginPath();
    context.save();
    context.rotate(angle);
    context.moveTo(0, 0);
    context.lineTo(0, -radius);
    context.restore();
    context.closePath();
    context.stroke();
}
function drawBackground(radius) {
    context.fillStyle = "white";
    context.strokeStyle = "red";
    context.lineWidth = 50;
    context.beginPath();
    context.save();
    context.arc(0, 0, radius, 0, Math.PI * 2);
    context.restore();
    context.closePath();
    context.stroke();
    context.fill();
}
function drawNumber(radius) {
    var numberInClock = 12;
    for (var index = 1; index <= numberInClock; index++) {
        context.beginPath();
        context.save();
        context.moveTo(0, radius);
        context.rotate(index / 12 * (Math.PI * 2));
        context.closePath();
        context.font = "30px Arial";
        context.fillText(index.toString(), 0, -radius);
        context.restore();
    }
}
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
