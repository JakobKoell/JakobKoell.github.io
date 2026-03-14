/* =========================================
GRID CANVAS BACKGROUND
========================================= */

const canvas = document.getElementById("gridCanvas");

if(canvas){

const ctx = canvas.getContext("2d");

let width;
let height;

let mouseX = 0;
let mouseY = 0;

let scanY = 0;

function resizeCanvas(){

width = canvas.width = window.innerWidth;

height = canvas.height = document.documentElement.scrollHeight;

}

window.addEventListener("scroll", resizeCanvas);
window.addEventListener("resize", resizeCanvas);
resizeCanvas();


/* Mouse tracking */

document.addEventListener("mousemove", (e)=>{

mouseX = e.clientX;
mouseY = e.clientY;

});


/* Draw loop */

function draw(){

ctx.clearRect(0,0,width,height);

const gridSize = 60;


/* Draw grid */

ctx.strokeStyle = "rgba(0,188,212,0.15)";
ctx.lineWidth = 1;

for(let x=0;x<width;x+=gridSize){

ctx.beginPath();
ctx.moveTo(x,0);
ctx.lineTo(x,height);
ctx.stroke();

}

for(let y=0;y<height;y+=gridSize){

ctx.beginPath();
ctx.moveTo(0,y);
ctx.lineTo(width,y);
ctx.stroke();

}


/* Mouse highlight */

const cellX = Math.floor(mouseX/gridSize)*gridSize;
const cellY = Math.floor(mouseY/gridSize)*gridSize;

ctx.fillStyle = "rgba(0,188,212,0.12)";
ctx.fillRect(cellX,cellY,gridSize,gridSize);

ctx.strokeStyle = "rgba(0,224,255,0.6)";
ctx.strokeRect(cellX,cellY,gridSize,gridSize);


/* Cursor glow */

const gradient = ctx.createRadialGradient(
mouseX,
mouseY,
10,
mouseX,
mouseY,
120
);

gradient.addColorStop(0,"rgba(0,224,255,0.35)");
gradient.addColorStop(1,"rgba(0,224,255,0)");

ctx.fillStyle = gradient;

ctx.beginPath();
ctx.arc(mouseX,mouseY,120,0,Math.PI*2);
ctx.fill();


/* Scan line */

scanY += 0.6;

if(scanY > height){
scanY = 0;
}

const scanGradient = ctx.createLinearGradient(0,scanY-40,0,scanY+40);

scanGradient.addColorStop(0,"rgba(0,0,0,0)");
scanGradient.addColorStop(0.5,"rgba(0,188,212,0.15)");
scanGradient.addColorStop(1,"rgba(0,0,0,0)");

ctx.fillStyle = scanGradient;

ctx.fillRect(0,scanY-40,width,80);


/* Loop */

requestAnimationFrame(draw);

}

draw();

}