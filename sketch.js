function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  colorMode(HSB);
}

function draw() {
  stroke(mouseY, mouseX, 100);
  rotateX(frameCount * 0.1);
  rotateY(mouseY * 0.1);
  fill(0, 0, 0);
  box(height / 2.5);
}
