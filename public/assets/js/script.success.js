
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var W = 1800;
var H = 940;
canvas.width = W;
canvas.height = H;

var numberFlakes = 200;
var flakes = [];
for (var i = 0; i < numberFlakes; i++) {
    flakes.push({
        x: Math.random()*W,
        y: Math.random()*H,
        radius: Math.random()*8+1
    })
}

function drawFlakes() {

    ctx.clearRect(0, 0, W, H);

    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.beginPath();
    for (var i = 0; i < numberFlakes; i++) {
        var f = flakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI*2, true);
    }
    ctx.fill();
    moveFlakes();
}

var angle = 0;
function moveFlakes() {
    angle += 0.01;
    for (var i = 0; i < numberFlakes; i++) {
        var f = flakes[i];

        f.y += Math.cos(angle) + 1 + f.radius/2;
        f.x += Math.sin(angle) * 2;


        if (f.x > W+5 || f.x < -5 || f.y > H) {


            if (i%3 > 0) {
                flakes[i] = {x: Math.random()*W, y: -10, radius: f.radius};
            } else {

                if (Math.sin(angle) > 0) {

                    flakes[i] = {x: -5, y: Math.random()*H, radius: f.radius};
                } else {

                    flakes[i] = {x: W+5, y: Math.random()*H, radius: f.radius};
                }
            }
        }
    }
}

function drawText() {
    ctx.fillStyle = "rgba(205, 20, 4, 1)";
    ctx.font = "lighter 80px GOT";
    ctx.textAlign = "center";
    ctx.fillText("AND NOW WINTER", W/2, H/2.1);

    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.font = "lighter 80px";
    ctx.textAlign = "center";
    ctx.fillText("IS", W/2, H/1.9);

    ctx.fillStyle = "rgba(205, 20, 4, 1)";
    ctx.font = "lighter 500px";
    ctx.textAlign = "center";
    ctx.fillText("COMING", W/2, H/1.8);
}

function init() {
    drawFlakes();
    drawText();
}

setInterval(init, 30);
