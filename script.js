let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let y = canvas.height / 2;
let speed = 0;
let gravity = 0.5;
let lift = -10;
let balloonImg = new Image();
balloonImg.src = "https://cdn-icons-png.flaticon.com/512/3800/3800024.png"; // balloon icon

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Balloon
  ctx.drawImage(balloonImg, canvas.width / 2 - 25, y, 50, 50);

  // Gravity
  speed += gravity;
  y += speed;

  if (y > canvas.height - 50) {
    y = canvas.height - 50;
    speed = 0;
  }
  if (y < 0) {
    y = 0;
    speed = 0;
  }

  requestAnimationFrame(draw);
}

function startGame() {
  y = canvas.height / 2;
  speed = 0;
  draw();
}

document.addEventListener("keydown", () => {
  speed += lift;
});
