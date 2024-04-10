function setup() {
    let canvasContainer = document.getElementById('p5-canvas-2');
    let canvas = createCanvas(400, 400);
    canvas.parent(canvasContainer); // Das Canvas wird im Container platziert
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
  