function setup() {
  let canvasContainer  = document.getElementById('canvas-container');
  let canvas = createCanvas(400, 400, ['canvas1']);
  canvas.parent("canvasContainer");
  background(0, 0, 255);
  strokeWeight(5);

  for (let i = 0; i <= innerWidth; i += 20) {
    stroke(0, 255, 0);
    line(0, i, i, width);

    stroke(255, 0, 0);
    line(i, 0, height, i);
  }
}

function draw() {}
