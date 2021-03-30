let gap = 20;
let angle = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
  frameRate(24)
}

function draw() {
  background(0);
  noCursor();
  //fill('white');
  //circle(mouseX, mouseY, 10);
  angle++;
  push();
  
  translate(width/2, height/2.5);
  noFill();
  stroke('white');
  strokeWeight(1);
  for (let i=0; i<=15; i+=1)
    {arc(0, 0, 10+i*gap, 10+i*gap, 0, 360 - i - angle/10);}
  
  pop();
  
  stroke('white');
  fill('white');
  strokeWeight(1);
  for (let i=0; i<=50; i+=1)
    {point(random(width),random(height));}
  push();
  translate(width/2, height-height/2.5);
  textFont('Arial');
  textSize(50);
  textAlign(CENTER, CENTER);
  text('bignus',0,120);
  pop();
}