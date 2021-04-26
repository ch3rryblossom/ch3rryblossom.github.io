angle = 180;
function setup() {
    slider = createSlider(0, TWO_PI, PI/4, 0.01);
    createCanvas(windowWidth, windowHeight);
    frameRate(24);
  }
function draw() {
    background(51);
    angle = slider.value();
    var len = 100;
    stroke(255);
    translate(width/2, height);
    branch(150);
}
function branch(len) {
  line (0, 0, 0,-len);
  translate(0, -len);
  if (len>4) {
    push();
    rotate(angle/4);
    branch(len*0.67);
    pop();
    push();
    rotate(-angle/4);
    branch(len*0.67);
    pop();
  }

}