/* =========================================
GRID CANVAS BACKGROUND
========================================= */
const canvas = document.getElementById("gridCanvas");

if (canvas) {

  const ctx = canvas.getContext("2d");

  let width;
  let height;

  let mouseX = 0;
  let mouseY = 0;

  let scanY = 0;

  const gridSize = 60;
  const majorEvery = 5; // major grid every 5 cells

  /* =========================================
  CANVAS RESIZE
  ========================================= */
  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;

    // Resize to fit the full window
    width = window.innerWidth;
    height = window.innerHeight;

    // Update the canvas style to match the window size
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Scale the internal resolution of the canvas
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    // Set the transformation matrix so everything is drawn in device-independent pixels
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // Ensure the canvas resizes properly when window is resized or scrolled
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("scroll", resizeCanvas);
  resizeCanvas();

  /* =========================================
  MOUSE TRACKING
  ========================================= */
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  /* =========================================
  DRAW LOOP
  ========================================= */
  function draw() {
    ctx.clearRect(0, 0, width, height);

    /* GRID LINES */
    for (let x = 0, i = 0; x < width; x += gridSize, i++) {
      ctx.beginPath();

      // Major lines every 'majorEvery' steps
      ctx.strokeStyle =
        i % majorEvery === 0
          ? "rgba(0,188,212,0.28)"
          : "rgba(0,188,212,0.12)";

      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0, i = 0; y < height; y += gridSize, i++) {
      ctx.beginPath();

      // Major lines every 'majorEvery' steps
      ctx.strokeStyle =
        i % majorEvery === 0
          ? "rgba(0,188,212,0.28)"
          : "rgba(0,188,212,0.12)";

      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    /* MOUSE CELL HIGHLIGHT */
    const cellX = Math.floor(mouseX / gridSize) * gridSize;
    const cellY = Math.floor(mouseY / gridSize) * gridSize;

    ctx.fillStyle = "rgba(0,188,212,0.12)";
    ctx.fillRect(cellX, cellY, gridSize, gridSize);

    ctx.strokeStyle = "rgba(0,224,255,0.6)";
    ctx.strokeRect(cellX, cellY, gridSize, gridSize);

    /* CURSOR GLOW */
    const gradient = ctx.createRadialGradient(
      mouseX,
      mouseY,
      10,
      mouseX,
      mouseY,
      120
    );
    gradient.addColorStop(0, "rgba(0,224,255,0.35)");
    gradient.addColorStop(1, "rgba(0,224,255,0)");

    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 120, 0, Math.PI * 2);
    ctx.fill();

    /* SCAN LINE */
    scanY += 0.6;

    if (scanY > height) {
      scanY = 0;
    }

    const scanGradient = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);

    scanGradient.addColorStop(0, "rgba(0,0,0,0)");
    scanGradient.addColorStop(0.5, "rgba(0,188,212,0.15)");
    scanGradient.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = scanGradient;
    ctx.fillRect(0, scanY - 40, width, 80);

    /* LOOP */
    requestAnimationFrame(draw);
  }

  draw();
}
