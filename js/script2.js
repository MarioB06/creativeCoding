function setup() {
  let canvas2 = createCanvas(400, 400);
  canvas2.parent("p5-canvas-2");
  background(0);
  strokeWeight(2);
  for (let i = 0; i < width; i += 20) {
    for (let j = 0; j < height; j += 20) {
      if ((i + j) % 40 === 0) {
        stroke(255);
      } else {
        stroke(0);
      }
      point(i, j);
    }
  }
}

function draw() {}
