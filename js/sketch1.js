function setup() {
    let canvasContainer = document.getElementById('canvasContainer1');
    let canvas = createCanvas(400, 400);
    canvas.parent(canvasContainer); // Das Canvas wird im Container platziert
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
  