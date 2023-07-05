let x = 0;
let y = 1;
//let r = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(78);
}

function draw() {
  //background(220,8,8);
  noFill();
  show();
  move();
  picture(x,mouseY,33);
  picture(mouseX,mouseY,23)
  picture(x,x,23)
  picture(x,y,mouseX)
}

function show() {
  fill(0, 230, 199);
  ellipse(x, 78, 20, 20);}
  function move()  {
    x += y;

  if (x > 100 && x < 150) {
    fill(4,4,245)
    ellipse(x, x, 20, 20);
    //ellipse(x,78,56,67);
  } else {
    fill(0, 230, 199);
    ellipse(x, x, 20, 20);
    fill(45, 55, 255);
    ellipse(x, 34, 20, 20);
    fill(45, 55, 255);
    ellipse(x, 234, 20, 20);
    fill(255, 45, 55);
    ellipse(34, x, 20, 20);
    fill(255, 45, 55);
    ellipse(334, x, 20, 20);
    ellipse(434, x, 20, 20);
    fill(255, 45, 55);
    ellipse(734, x, 20, 20);
  }
}  

function picture(x, y, diameter) {
  fill(0, 77, 223);
  ellipse(x + 89, y, 89);
  //x=y+1
  fill(78,33,33)
  ellipse(x, y, diameter);
  fill(78)
  ellipse(x - 30, y, diameter);
  ellipse(x - 78, y, diameter);
  fill(223,3,3)
   ellipse(x, y-17, diameter);
   //x += y;
}

function mousePressed() {
 x = 0;
}
