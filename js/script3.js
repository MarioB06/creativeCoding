let sideLength = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(0.5);
  noFill();
  
  for (let i = 0; i < 20; i++) {
    let centerX = width / 2;
    let centerY = height / 2;
    
    let offsetX = random(-width / 4, width / 4);
    let offsetY = random(-height / 4, height / 4);
    
    let x = centerX + offsetX;
    let y = centerY + offsetY;
    
    rect(x, y, sideLength, sideLength);
    sideLength += 20;
  }
}

function draw() {

}