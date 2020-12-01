var ground;
var divisionHeight = 300

function setup() {
  createCanvas(480,800);
  ground = new Border(width/2, height-10, width, 20);

  for (var k = 0; k <= width k = k + 80) {
    divisions.push(new Border(k, height-divisionHeight/2, 10, divisionHeight))
  } 

  
}

function draw() {
  background(0,0,0); 
  
  drawSprites();
}
